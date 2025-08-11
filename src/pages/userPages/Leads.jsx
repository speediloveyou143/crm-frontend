import { useState, useRef, useEffect } from 'react';
import { FiUsers, FiSearch, FiPlus, FiEdit, FiTrash2, FiUser, FiMail, FiPhone, FiCalendar, FiTrash, FiChevronDown, FiMoreVertical } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Leads = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [courseType, setCourseType] = useState('All');
  const [courseTypes, setCourseTypes] = useState([
    { value: 'Python' },
    { value: 'Java' },
    { value: 'JavaScript' },
    { value: 'React' },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
  const [isRemoveCourseModalOpen, setIsRemoveCourseModalOpen] = useState(false);
  const [isAddFieldModalOpen, setIsAddFieldModalOpen] = useState(false);
  const [isUpdateFieldModalOpen, setIsUpdateFieldModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [leadToDelete, setLeadToDelete] = useState(null);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [newLead, setNewLead] = useState({ name: '', email: '', phone: '', registeredDate: '', courseName: '', customFields: {} });
  const [updateLead, setUpdateLead] = useState({ id: null, name: '', email: '', phone: '', registeredDate: '', courseName: '', customFields: {} });
  const [newCourseType, setNewCourseType] = useState('');
  const [selectedCoursesToRemove, setSelectedCoursesToRemove] = useState([]);
  const [errors, setErrors] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [customFields, setCustomFields] = useState([]);
  const [newField, setNewField] = useState({ name: '', type: 'text', options: [], required: true });
  const [updateField, setUpdateField] = useState({ name: '', type: 'text', options: [], required: true, originalName: '' });
  const [newOption, setNewOption] = useState('');
  const [activeFieldDropdown, setActiveFieldDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const fieldDropdownRef = useRef(null);

  // Array for field type dropdown options
  const fieldTypeOptions = [
    { value: 'text', label: 'Text' },
    { value: 'textarea', label: 'Paragraph (Textarea)' },
    { value: 'number', label: 'Number' },
    { value: 'email', label: 'Email' },
    { value: 'tel', label: 'Phone Number' },
    { value: 'url', label: 'URL' },
    { value: 'password', label: 'Password' },
    { value: 'file', label: 'File Upload' },
    { value: 'date', label: 'Date' },
    { value: 'datetime-local', label: 'Date & Time' },
    { value: 'radio', label: 'Multiple Choice (Radio)' },
    { value: 'checkbox', label: 'Checkboxes' },
    { value: 'dropdown', label: 'Dropdown' },
  ];

  // Define default fields for form handling
  const [defaultFields, setDefaultFields] = useState([
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'tel', required: true },
    { name: 'registeredDate', type: 'date', required: true },
    { name: 'courseName', type: 'dropdown', required: true, options: courseTypes },
  ]);

  // Mock data
  const [leads, setLeads] = useState([
    { id: 1, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '5551234567', registeredDate: '2025-07-10', courseName: 'Python', courseType: 'Python', customFields: {} },
    { id: 2, name: 'John Smith', email: 'john.smith@example.com', phone: '5559876543', registeredDate: '2025-07-15', courseName: 'Java', courseType: 'Java', customFields: {} },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', phone: '5554567890', registeredDate: '2025-07-05', courseName: 'JavaScript', courseType: 'JavaScript', customFields: {} },
    { id: 4, name: 'Bob Wilson', email: 'bob.wilson@example.com', phone: '5556543210', registeredDate: '2025-07-12', courseName: 'JavaScript', courseType: 'JavaScript', customFields: {} },
    { id: 5, name: 'Sarah Johnson', email: 'sarah.johnson@example.com', phone: '5557891234', registeredDate: '2025-07-14', courseName: 'Python', courseType: 'Python', customFields: {} },
    { id: 6, name: 'Michael Lee', email: 'michael.lee@example.com', phone: '5553219876', registeredDate: '2025-07-13', courseName: 'Java', courseType: 'Java', customFields: {} },
    { id: 7, name: 'Emma Davis', email: 'emma.davis@example.com', phone: '5551112222', registeredDate: '2025-07-10', courseName: null, courseType: null, customFields: {} },
  ]);

  // Handle clicks outside dropdowns to close them
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (fieldDropdownRef.current && !fieldDropdownRef.current.contains(event.target)) {
        setActiveFieldDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update courseName options when courseTypes change
  useEffect(() => {
    setDefaultFields((prev) =>
      prev.map((field) =>
        field.name === 'courseName' ? { ...field, options: courseTypes } : field
      )
    );
  }, [courseTypes]);

  // Reset courseName in newLead and updateLead if no longer valid
  useEffect(() => {
    setNewLead((prev) => ({
      ...prev,
      courseName: courseTypes.some((type) => type.value === prev.courseName) ? prev.courseName : '',
    }));
    setUpdateLead((prev) => ({
      ...prev,
      courseName: courseTypes.some((type) => type.value === prev.courseName) ? prev.courseName : '',
    }));
  }, [courseTypes]);

  // Filter and sort leads
  const filteredLeads = leads
    .filter((lead) => {
      const matchesSearch = !searchTerm || 
        (lead.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (lead.email || '').toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCourseType = courseType === 'All' || lead.courseType === courseType;
      const leadDate = new Date(lead.registeredDate);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      const matchesDate = (!start || leadDate >= start) && (!end || leadDate <= end);
      return matchesSearch && matchesCourseType && matchesDate;
    })
    .sort((a, b) => (a.name || '').localeCompare(b.name || ''));

  // Handle form input changes
  const handleInputChange = (e, setLead) => {
    const { name, value } = e.target;
    setLead((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Handle custom field input changes
  const handleCustomFieldChange = (e, fieldName, fieldType, setLead) => {
    if (fieldType === 'checkbox') {
      const currentSelections = setLead === setNewLead ? (newLead.customFields[fieldName] || []) : (updateLead.customFields[fieldName] || []);
      const updatedSelections = e.target.checked
        ? [...currentSelections, e.target.value]
        : currentSelections.filter((val) => val !== e.target.value);
      setLead((prev) => ({
        ...prev,
        customFields: { ...prev.customFields, [fieldName]: updatedSelections },
      }));
    } else if (fieldType === 'radio' || fieldType === 'dropdown') {
      setLead((prev) => ({
        ...prev,
        customFields: { ...prev.customFields, [fieldName]: e.target.value },
      }));
    } else if (fieldType === 'file') {
      const file = e.target.files[0];
      setLead((prev) => ({
        ...prev,
        customFields: { ...prev.customFields, [fieldName]: file ? file.name : '' },
      }));
    } else {
      const { value } = e.target;
      setLead((prev) => ({
        ...prev,
        customFields: { ...prev.customFields, [fieldName]: value },
      }));
    }
    setErrors((prev) => ({ ...prev, [fieldName]: '' }));
  };

  // Handle course type input change
  const handleCourseTypeChange = (e) => {
    setNewCourseType(e.target.value);
    setErrors((prev) => ({ ...prev, courseType: '' }));
  };

  // Handle new field input changes
  const handleNewFieldChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewField((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Handle update field input changes
  const handleUpdateFieldChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUpdateField((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // Handle adding options for radio/checkbox/dropdown fields
  const handleAddOption = (setField) => {
    setField((prev) => {
      if (newOption.trim() && !prev.options.some((opt) => opt.value === newOption.trim())) {
        return {
          ...prev,
          options: [...prev.options, { value: newOption.trim() }],
        };
      }
      return prev;
    });
    setNewOption('');
  };

  // Handle Enter key for adding options
  const handleOptionKeyDown = (e, setField) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddOption(setField);
    }
  };

  // Handle removing options
  const handleRemoveOption = (optionValue, setField) => {
    setField((prev) => ({
      ...prev,
      options: prev.options.filter((opt) => opt.value !== optionValue),
    }));
  };

  // Validate Add Lead form
  const validateForm = () => {
    const newErrors = {};
    const activeFields = [...defaultFields, ...customFields];
    activeFields.forEach((field) => {
      if (field.required) {
        if (defaultFields.some((df) => df.name === field.name)) {
          if (field.name === 'courseName') {
            if (!newLead.courseName || !courseTypes.some((type) => type.value === newLead.courseName)) {
              newErrors.courseName = 'Please select a valid course';
            }
          } else if (!newLead[field.name]) {
            newErrors[field.name] = `${field.name} is required`;
          } else if (field.name === 'email' && !newLead.email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            newErrors.email = 'Invalid email address';
          } else if (field.name === 'phone' && !newLead.phone.match(/^\d{10}$/)) {
            newErrors.phone = 'Phone number must be 10 digits';
          } else if (field.name === 'registeredDate' && !newLead.registeredDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
            newErrors.registeredDate = 'Date must be in YYYY-MM-DD format';
          }
        } else {
          if (field.type === 'checkbox' && (!newLead.customFields[field.name] || newLead.customFields[field.name].length === 0)) {
            newErrors[field.name] = `${field.name} requires at least one selection`;
          } else if (field.type === 'dropdown' && !newLead.customFields[field.name]) {
            newErrors[field.name] = `${field.name} is required`;
          } else if (field.type === 'tel' && newLead.customFields[field.name] && !newLead.customFields[field.name].match(/^\d{10}$/)) {
            newErrors[field.name] = `${field.name} must be a 10-digit phone number`;
          } else if (field.type === 'url' && newLead.customFields[field.name] && !newLead.customFields[field.name].match(/^https?:\/\/[^\s$.?#].[^\s]*$/)) {
            newErrors[field.name] = `${field.name} must be a valid URL`;
          } else if (!['checkbox', 'dropdown', 'tel', 'url', 'file'].includes(field.type) && !newLead.customFields[field.name]) {
            newErrors[field.name] = `${field.name} is required`;
          } else if (field.type === 'file' && !newLead.customFields[field.name]) {
            newErrors[field.name] = `${field.name} is required`;
          }
        }
      }
    });
    return newErrors;
  };

  // Validate Update Lead form
  const validateUpdateForm = () => {
    const newErrors = {};
    const activeFields = [...defaultFields, ...customFields];
    activeFields.forEach((field) => {
      if (field.required) {
        if (defaultFields.some((df) => df.name === field.name)) {
          if (field.name === 'courseName') {
            if (!updateLead.courseName || !courseTypes.some((type) => type.value === updateLead.courseName)) {
              newErrors.courseName = 'Please select a valid course';
            }
          } else if (!updateLead[field.name]) {
            newErrors[field.name] = `${field.name} is required`;
          } else if (field.name === 'email' && !updateLead.email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            newErrors.email = 'Invalid email address';
          } else if (field.name === 'phone' && !updateLead.phone.match(/^\d{10}$/)) {
            newErrors.phone = 'Phone number must be 10 digits';
          } else if (field.name === 'registeredDate' && !updateLead.registeredDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
            newErrors.registeredDate = 'Date must be in YYYY-MM-DD format';
          }
        } else {
          if (field.type === 'checkbox' && (!updateLead.customFields[field.name] || updateLead.customFields[field.name].length === 0)) {
            newErrors[field.name] = `${field.name} requires at least one selection`;
          } else if (field.type === 'dropdown' && !updateLead.customFields[field.name]) {
            newErrors[field.name] = `${field.name} is required`;
          } else if (field.type === 'tel' && updateLead.customFields[field.name] && !updateLead.customFields[field.name].match(/^\d{10}$/)) {
            newErrors[field.name] = `${field.name} must be a 10-digit phone number`;
          } else if (field.type === 'url' && updateLead.customFields[field.name] && !updateLead.customFields[field.name].match(/^https?:\/\/[^\s$.?#].[^\s]*$/)) {
            newErrors[field.name] = `${field.name} must be a valid URL`;
          } else if (!['checkbox', 'dropdown', 'tel', 'url', 'file'].includes(field.type) && !updateLead.customFields[field.name]) {
            newErrors[field.name] = `${field.name} is required`;
          } else if (field.type === 'file' && !updateLead.customFields[field.name]) {
            newErrors[field.name] = `${field.name} is required`;
          }
        }
      }
    });
    return newErrors;
  };

  // Validate Add Course form
  const validateCourseForm = () => {
    const newErrors = {};
    if (!newCourseType.trim()) newErrors.courseType = 'Course type is required';
    return newErrors;
  };

  // Validate Add Field form
  const validateFieldForm = (field) => {
    const newErrors = {};
    if (!field.name.trim()) newErrors.name = 'Field name is required';
    if (['radio', 'checkbox', 'dropdown'].includes(field.type) && field.name !== 'courseName' && field.options.length === 0) {
      newErrors.options = 'At least one option is required for radio, checkbox, or dropdown fields';
    }
    return newErrors;
  };

  // Handle adding a new lead
  const handleAddLead = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    const newId = leads.length + 1;
    const courseType = newLead.courseName;
    const newLeadData = { id: newId, ...newLead, courseType };
    setLeads([...leads, newLeadData]);
    setNewLead({ name: '', email: '', phone: '', registeredDate: '', courseName: '', customFields: {} });
    setErrors({});
    setIsAddModalOpen(false);
  };

  // Handle adding a new course type
  const handleAddCourseType = (e) => {
    e.preventDefault();
    const formErrors = validateCourseForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    const newCourse = { value: newCourseType.trim() };
    if (!courseTypes.some((type) => type.value === newCourseType.trim())) {
      setCourseTypes([...courseTypes, newCourse]);
    }
    setNewCourseType('');
    setErrors({});
    setIsAddCourseModalOpen(false);
    setIsDropdownOpen(false);
  };

  // Handle adding a new custom field
  const handleAddField = (e) => {
    e.preventDefault();
    const formErrors = validateFieldForm(newField);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setCustomFields((prev) => [...prev, { ...newField }]);
    setLeads((prevLeads) =>
      prevLeads.map((lead) => ({
        ...lead,
        customFields: {
          ...lead.customFields,
          [newField.name]: newField.type === 'checkbox' ? [] : newField.type === 'file' ? '' : '',
        },
      }))
    );
    setNewField({ name: '', type: 'text', options: [], required: true });
    setNewOption('');
    setErrors({});
    setIsAddFieldModalOpen(false);
  };

  // Handle updating a field
  const handleUpdateField = (e) => {
    e.preventDefault();
    const formErrors = validateFieldForm(updateField);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    const { originalName, ...updatedFieldData } = updateField;
    setCustomFields((prev) =>
      prev.map((field) =>
        field.name === originalName ? updatedFieldData : field
      )
    );
    setDefaultFields((prev) =>
      prev.map((field) =>
        field.name === originalName ? updatedFieldData : field
      )
    );
    setLeads((prevLeads) =>
      prevLeads.map((lead) => {
        const updatedCustomFields = { ...lead.customFields };
        if (updatedCustomFields[originalName]) {
          updatedCustomFields[updateField.name] = updatedCustomFields[originalName];
          delete updatedCustomFields[originalName];
        } else if (defaultFields.some((df) => df.name === originalName)) {
          lead[updateField.name] = lead[originalName];
          delete lead[originalName];
        }
        return {
          ...lead,
          customFields: updatedCustomFields,
        };
      })
    );
    setNewLead((prev) => {
      const updatedCustomFields = { ...prev.customFields };
      if (updatedCustomFields[originalName]) {
        updatedCustomFields[updateField.name] = updatedCustomFields[originalName];
        delete updatedCustomFields[originalName];
      } else if (defaultFields.some((df) => df.name === originalName)) {
        prev[updateField.name] = prev[originalName];
        delete prev[originalName];
      }
      return {
        ...prev,
        customFields: updatedCustomFields,
      };
    });
    setUpdateLead((prev) => {
      const updatedCustomFields = { ...prev.customFields };
      if (updatedCustomFields[originalName]) {
        updatedCustomFields[updateField.name] = updatedCustomFields[originalName];
        delete updatedCustomFields[originalName];
      } else if (defaultFields.some((df) => df.name === originalName)) {
        prev[updateField.name] = prev[originalName];
        delete prev[originalName];
      }
      return {
        ...prev,
        customFields: updatedCustomFields,
      };
    });
    setUpdateField({ name: '', type: 'text', options: [], required: true, originalName: '' });
    setNewOption('');
    setErrors({});
    setIsUpdateFieldModalOpen(false);
  };

  // Handle deleting a field
  const handleDeleteField = (fieldName) => {
    if (fieldName === 'name') {
      setErrors({ delete: 'The "name" field cannot be deleted as it is required for sorting and filtering.' });
      return;
    }
    setCustomFields((prev) => prev.filter((field) => field.name !== fieldName));
    setDefaultFields((prev) => prev.filter((field) => field.name !== fieldName));
    setLeads((prevLeads) =>
      prevLeads.map((lead) => {
        const updatedLead = { ...lead, customFields: { ...lead.customFields } };
        if (defaultFields.some((field) => field.name === fieldName)) {
          delete updatedLead[fieldName];
        } else {
          delete updatedLead.customFields[fieldName];
        }
        return updatedLead;
      })
    );
    setNewLead((prev) => {
      const updatedLead = { ...prev, customFields: { ...prev.customFields } };
      if (defaultFields.some((field) => field.name === fieldName)) {
        delete updatedLead[fieldName];
      } else {
        delete updatedLead.customFields[fieldName];
      }
      return updatedLead;
    });
    setUpdateLead((prev) => {
      const updatedLead = { ...prev, customFields: { ...prev.customFields } };
      if (defaultFields.some((field) => field.name === fieldName)) {
        delete updatedLead[fieldName];
      } else {
        delete updatedLead.customFields[fieldName];
      }
      return updatedLead;
    });
    setActiveFieldDropdown(null);
  };

  // Handle course remove selection
  const handleCourseRemoveSelection = (courseValue) => {
    setSelectedCoursesToRemove((prev) =>
      prev.includes(courseValue)
        ? prev.filter((value) => value !== courseValue)
        : [...prev, courseValue]
    );
  };

  // Handle removing course types
  const handleRemoveCourses = (e) => {
    e.preventDefault();
    const usedCourseTypes = new Set(leads.map((lead) => lead.courseType).filter(Boolean));
    const cannotRemove = selectedCoursesToRemove.filter((value) => usedCourseTypes.has(value));
    if (cannotRemove.length > 0) {
      setErrors({ remove: `Cannot remove course types in use: ${cannotRemove.join(', ')}` });
      return;
    }
    setCourseTypes(courseTypes.filter((type) => !selectedCoursesToRemove.includes(type.value)));
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        selectedCoursesToRemove.includes(lead.courseName)
          ? { ...lead, courseName: null, courseType: null }
          : lead
      )
    );
    if (selectedCoursesToRemove.includes(courseType)) {
      setCourseType('All');
    }
    setSelectedCoursesToRemove([]);
    setErrors({});
    setIsRemoveCourseModalOpen(false);
    setIsDropdownOpen(false);
  };

  // Handle update button click
  const handleUpdateClick = (lead) => {
    setUpdateLead({ id: lead.id, name: lead.name, email: lead.email, phone: lead.phone, registeredDate: lead.registeredDate, courseName: lead.courseName || '', customFields: { ...lead.customFields } });
    setIsUpdateModalOpen(true);
  };

// Handle updating a lead
const handleUpdateLead = (e) => {
  e.preventDefault();
  const newErrors = validateUpdateForm();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }
  const courseType = updateLead.courseName;
  const updatedLead = { ...updateLead, courseType };
  setLeads(leads.map((lead) =>
    lead.id === updateLead.id ? updatedLead : lead
  ));
  setSelectedLeads(selectedLeads.map((selected) =>
    selected.id === updateLead.id ? updatedLead : selected
  ));
  setUpdateLead({ id: null, name: '', email: '', phone: '', registeredDate: '', courseName: '', customFields: {} });
  setErrors({});
  setIsUpdateModalOpen(false);
};

  // Handle delete button click
  const handleDeleteClick = (lead) => {
    setLeadToDelete(lead);
    setIsDeleteModalOpen(true);
  };

  // Handle delete confirmation
  const handleDeleteLead = () => {
    if (deleteConfirmation.toLowerCase() === 'delete' && leadToDelete) {
      setLeads(leads.filter((lead) => lead.id !== leadToDelete.id));
      setSelectedLeads(selectedLeads.filter((selected) => selected.id !== leadToDelete.id));
      setIsDeleteModalOpen(false);
      setDeleteConfirmation('');
      setLeadToDelete(null);
    }
  };

  // Handle back button to reset filters
  const handleBackClick = () => {
    setSearchTerm('');
    setStartDate('');
    setEndDate('');
    setCourseType('All');
    setSelectedLeads([]);
  };

  // Handle checkbox change for individual leads
  const handleCheckboxChange = (lead) => {
    setSelectedLeads((prev) =>
      prev.some((selected) => selected.id === lead.id)
        ? prev.filter((selected) => selected.id !== lead.id)
        : [...prev, lead]
    );
  };

  // Reset modals
  const resetAddModal = () => {
    setIsAddModalOpen(false);
    setNewLead({ name: '', email: '', phone: '', registeredDate: '', courseName: '', customFields: {} });
    setErrors({});
    setActiveFieldDropdown(null);
  };

  const resetUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setUpdateLead({ id: null, name: '', email: '', phone: '', registeredDate: '', courseName: '', customFields: {} });
    setErrors({});
  };

  const resetDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeleteConfirmation('');
    setLeadToDelete(null);
  };

  const resetAddCourseModal = () => {
    setIsAddCourseModalOpen(false);
    setNewCourseType('');
    setErrors({});
    setIsDropdownOpen(false);
  };

  const resetRemoveCourseModal = () => {
    setIsRemoveCourseModalOpen(false);
    setSelectedCoursesToRemove([]);
    setErrors({});
    setIsDropdownOpen(false);
  };

  const resetAddFieldModal = () => {
    setIsAddFieldModalOpen(false);
    setNewField({ name: '', type: 'text', options: [], required: true });
    setNewOption('');
    setErrors({});
  };

  const resetUpdateFieldModal = () => {
    setIsUpdateFieldModalOpen(false);
    setUpdateField({ name: '', type: 'text', options: [], required: true, originalName: '' });
    setNewOption('');
    setErrors({});
  };

  // Handle course type selection
  const handleCourseTypeSelection = (value) => {
    if (value === 'add-course') {
      setIsAddCourseModalOpen(true);
      setCourseType('All');
    } else if (value === 'remove-course') {
      setIsRemoveCourseModalOpen(true);
      setCourseType('All');
    } else {
      setCourseType(value);
    }
    setIsDropdownOpen(false);
  };

  // Handle field dropdown actions
  const handleFieldAction = (fieldName, action) => {
    if (action === 'update') {
      const field = [...defaultFields, ...customFields].find((f) => f.name === fieldName);
      setUpdateField({ ...field, originalName: fieldName });
      setIsUpdateFieldModalOpen(true);
    } else if (action === 'delete') {
      handleDeleteField(fieldName);
    }
    setActiveFieldDropdown(null);
  };

  // Active fields for table and form rendering
  const activeFields = [...defaultFields, ...customFields];

  return (
    <div className="p-4 sm:p-6 space-y-6 bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-950/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            Your Leads
          </h2>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all text-sm sm:text-base"
          >
            <FiPlus className="text-lg" />
            <span>Add Lead</span>
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-950/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">Leads List</h3>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-stretch">
            <div className="flex flex-col w-full sm:flex-1">
              <label className="text-sm text-gray-300 mb-1">Search</label>
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <div className="flex flex-col w-full sm:w-40">
                <label className="text-sm text-gray-300 mb-1">Start</label>
                <div className="relative">
                  <FiCalendar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full sm:w-40">
                <label className="text-sm text-gray-300 mb-1">End</label>
                <div className="relative">
                  <FiCalendar className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full pl-8 pr-2 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full sm:w-40">
                <label className="text-sm text-gray-300 mb-1">Course Type</label>
                <div className="relative" ref={dropdownRef}>
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base flex justify-between items-center cursor-pointer"
                  >
                    <span>{courseType === 'All' ? 'All Courses' : courseType}</span>
                    <FiChevronDown className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 w-full mt-1 rounded-lg bg-gray-800/90 border border-gray-700 shadow-lg max-h-64 overflow-y-auto"
                    >
                      <div
                        onClick={() => handleCourseTypeSelection('All')}
                        className="px-4 py-2 text-gray-200 hover:bg-gray-600 cursor-pointer bg-gray-600 text-sm sm:text-base"
                      >
                        All Courses
                      </div>
                      {courseTypes.map((type, index) => (
                        <div
                          key={index}
                          onClick={() => handleCourseTypeSelection(type.value)}
                          className="px-4 py-2 text-gray-200 hover:bg-gray-600 cursor-pointer bg-gray-700 text-sm sm:text-base"
                        >
                          {type.value}
                        </div>
                      ))}
                      <div
                        onClick={() => handleCourseTypeSelection('add-course')}
                        className="px-4 py-2 text-gray-200 hover:bg-blue-600 cursor-pointer bg-blue-500 font-semibold text-sm sm:text-base"
                      >
                        Add Course
                      </div>
                      <div
                        onClick={() => handleCourseTypeSelection('remove-course')}
                        className="px-2 py-2 text-gray-200 hover:bg-red-600 cursor-pointer bg-red-500 font-semibold text-sm sm:text-base"
                      >
                        Remove Course
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-700 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-gray-300 text-sm sm:text-base">
                  <th className="p-4 text-left">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedLeads(filteredLeads);
                        } else {
                          setSelectedLeads([]);
                        }
                      }}
                      checked={selectedLeads.length === filteredLeads.length && filteredLeads.length > 0}
                      className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-600 rounded cursor-pointer"
                    />
                  </th>
                  {activeFields.map((field) => (
                    <th key={field.name} className="p-4 text-left">
                      <div className="flex items-center space-x-2">
                        {field.name === 'name' && <FiUser className="text-indigo-400" />}
                        {field.name === 'email' && <FiMail className="text-indigo-400" />}
                        {field.name === 'phone' && <FiPhone className="text-indigo-400" />}
                        {field.name === 'registeredDate' && <FiCalendar className="text-indigo-400" />}
                        <span>{field.name.charAt(0).toUpperCase() + field.name.slice(1)}</span>
                      </div>
                    </th>
                  ))}
                  <th className="p-4 text-left">
                    <span>Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700 max-h-[70vh] overflow-y-auto">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={activeFields.length + 1} className="p-4 text-center text-gray-400 text-sm sm:text-base">
                      No leads found.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead, index) => (
                    <motion.tr
                      key={lead.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`${index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/50'} hover:bg-gray-700/50 transition-colors text-gray-200 text-sm sm:text-base`}
                    >
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={selectedLeads.some((selected) => selected.id === lead.id)}
                          onChange={() => handleCheckboxChange(lead)}
                          className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-600 rounded cursor-pointer"
                        />
                      </td>
                      {activeFields.map((field) => (
                        <td key={field.name} className="p-4">
                          {field.name === 'registeredDate'
                            ? lead[field.name] ? new Date(lead[field.name]).toLocaleDateString() : 'Not registered'
                            : field.name === 'courseName'
                            ? courseTypes.some((type) => type.value === lead[field.name])
                              ? lead[field.name]
                              : 'No course'
                            : defaultFields.some((df) => df.name === field.name)
                            ? lead[field.name] || 'Not provided'
                            : field.type === 'checkbox' && Array.isArray(lead.customFields[field.name])
                            ? lead.customFields[field.name].join(', ') || 'Not provided'
                            : lead.customFields[field.name] || 'Not provided'}
                        </td>
                      ))}
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleUpdateClick(lead)}
                            className="p-2 rounded-full bg-gray-700/50 hover:bg-blue-600 transition-colors"
                            title="Update Lead"
                          >
                            <FiEdit className="text-gray-200" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDeleteClick(lead)}
                            className="p-2 rounded-full bg-gray-700/50 hover:bg-red-600 transition-colors"
                            title="Delete Lead"
                          >
                            <FiTrash2 className="text-gray-200" />
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
            {filteredLeads.length === 0 && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleBackClick}
                  className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors text-sm sm:text-base"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {isAddModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 w-full max-w-4xl max-h-[80vh] overflow-y-auto"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">Add New Lead</h3>
            <form onSubmit={handleAddLead} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {activeFields.map((field) => (
                  <div key={field.name} className="relative flex items-center space-x-2">
                    <div className="flex-1">
                      <label className="block text-sm text-gray-300">
                        {field.name.charAt(0).toUpperCase() + field.name.slice(1)} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      {field.name === 'courseName' ? (
                        <select
                          name="courseName"
                          value={newLead.courseName}
                          onChange={(e) => handleInputChange(e, setNewLead)}
                          className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                        >
                          <option value="" className="hover:bg-gray-600 cursor-pointer bg-gray-700" disabled>Select a course</option>
                          {courseTypes.map((type) => (
                            <option key={type.value} value={type.value} className="hover:bg-gray-600 cursor-pointer bg-gray-700">{type.value}</option>
                          ))}
                        </select>
                      ) : field.type === 'checkbox' ? (
                        <div className="space-y-2">
                          {field.options.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                name={field.name}
                                value={option.value}
                                checked={newLead.customFields[field.name]?.includes(option.value) || false}
                                onChange={(e) => handleCustomFieldChange(e, field.name, field.type, setNewLead)}
                                className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-600 rounded"
                              />
                              <label className="text-sm text-gray-300">{option.value}</label>
                            </div>
                          ))}
                        </div>
                      ) : field.type === 'radio' ? (
                        <div className="space-y-2">
                          {field.options.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                              <input
                                type="radio"
                                name={field.name}
                                value={option.value}
                                checked={newLead.customFields[field.name] === option.value}
                                onChange={(e) => handleCustomFieldChange(e, field.name, field.type, setNewLead)}
                                className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-600 rounded"
                              />
                              <label className="text-sm text-gray-300">{option.value}</label>
                            </div>
                          ))}
                        </div>
                      ) : field.type === 'dropdown' ? (
                        <select
                          name={field.name}
                          value={newLead.customFields[field.name] || ''}
                          onChange={(e) => handleCustomFieldChange(e, field.name, field.type, setNewLead)}
                          className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                        >
                          <option value="" className="hover:bg-gray-600 cursor-pointer bg-gray-700" disabled>Select an option</option>
                          {field.options.map((option) => (
                            <option key={option.value} value={option.value} className="hover:bg-gray-600 cursor-pointer bg-gray-700">
                              {option.value}
                            </option>
                          ))}
                        </select>
                      ) : field.type === 'textarea' ? (
                        <textarea
                          name={field.name}
                          value={newLead.customFields[field.name] || ''}
                          onChange={(e) => handleCustomFieldChange(e, field.name, field.type, setNewLead)}
                          className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                          rows="4"
                        />
                      ) : field.type === 'file' ? (
                        <div className="relative">
                          <input
                            type="file"
                            name={field.name}
                            onChange={(e) => handleCustomFieldChange(e, field.name, field.type, setNewLead)}
                            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                          />
                          {newLead.customFields[field.name] && (
                            <p className="text-gray-300 text-xs mt-1">Selected: {newLead.customFields[field.name]}</p>
                          )}
                        </div>
                      ) : (
                        <div className="relative">
                          {field.name === 'name' && <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                          {field.name === 'email' && <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                          {field.name === 'phone' && <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                          {field.name === 'registeredDate' && <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                          <input
                            type={field.type}
                            name={field.name}
                            value={defaultFields.some((df) => df.name === field.name) ? newLead[field.name] || '' : newLead.customFields[field.name] || ''}
                            onChange={(e) => defaultFields.some((df) => df.name === field.name) ? handleInputChange(e, setNewLead) : handleCustomFieldChange(e, field.name, field.type, setNewLead)}
                            placeholder={field.name === 'phone' ? '1234567890' : undefined}
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                          />
                        </div>
                      )}
                      {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>}
                    </div>
                    <div className="mt-6">
                      <motion.button
                        type="button"
                        onClick={() => setActiveFieldDropdown(activeFieldDropdown === field.name ? null : field.name)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-gray-700/50 hover:bg-gray-600 transition-colors"
                      >
                        <FiMoreVertical className="text-gray-200" />
                      </motion.button>
                      <AnimatePresence>
                        {activeFieldDropdown === field.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute z-10 right-0 mt-2 w-48 rounded-lg bg-gray-800/90 border border-gray-700 shadow-lg"
                          >
                            <div
                              onClick={() => handleFieldAction(field.name, 'update')}
                              className="px-4 py-2 text-gray-200 hover:bg-blue-600 cursor-pointer bg-blue-500 text-sm sm:text-base"
                            >
                              Update Field
                            </div>
                            <div
                              onClick={() => handleFieldAction(field.name, 'delete')}
                              className="px-4 py-2 text-gray-200 hover:bg-red-600 cursor-pointer bg-red-500 text-sm sm:text-base"
                            >
                              Delete Field
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <motion.button
                  type="button"
                  onClick={() => setIsAddFieldModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-colors text-sm sm:text-base"
                >
                  <FiPlus className="text-lg" />
                  <span>Add Field</span>
                </motion.button>
                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={resetAddModal}
                    className="px-4 py-2 rounded-lg bg-red-700 text-gray-200 hover:bg-red-600 transition-colors text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-colors text-sm sm:text-base"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {isAddFieldModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 w-full max-w-md max-h-[80vh] overflow-y-auto"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">Add New Field</h3>
            <form onSubmit={handleAddField} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Field Type</label>
                <select
                  name="type"
                  value={newField.type}
                  onChange={handleNewFieldChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                >
                  {fieldTypeOptions.map((option) => (
                    <option key={option.value} value={option.value} className="hover:bg-gray-600 cursor-pointer bg-gray-700">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Field Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={newField.name}
                  onChange={handleNewFieldChange}
                  placeholder="Enter field name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              {['radio', 'checkbox', 'dropdown'].includes(newField.type) && (
                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Options <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {newField.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-gray-200 text-sm sm:text-base flex-1">{option.value}</span>
                        <motion.button
                          type="button"
                          onClick={() => handleRemoveOption(option.value, setNewField)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-1 rounded-full bg-gray-700/50 hover:bg-red-600 transition-colors"
                        >
                          <FiTrash className="text-gray-200" />
                        </motion.button>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newOption}
                        onChange={(e) => setNewOption(e.target.value)}
                        onKeyDown={(e) => handleOptionKeyDown(e, setNewField)}
                        placeholder="Add option (press Enter)"
                        className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                      />
                      <motion.button
                        type="button"
                        onClick={() => handleAddOption(setNewField)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-colors"
                      >
                        <FiPlus className="text-lg" />
                      </motion.button>
                    </div>
                    {errors.options && <p className="text-red-500 text-xs mt-1">{errors.options}</p>}
                  </div>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="required"
                  checked={newField.required}
                  onChange={handleNewFieldChange}
                  className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-600 rounded"
                />
                <label className="text-sm text-gray-300">Required</label>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={resetAddFieldModal}
                  className="px-4 py-2 rounded-lg bg-red-700 text-gray-200 hover:bg-red-600 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-colors text-sm sm:text-base"
                >
                  Add Field
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {isUpdateFieldModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 w-full max-w-md max-h-[80vh] overflow-y-auto"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">Update Field</h3>
            <form onSubmit={handleUpdateField} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Field Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={updateField.name}
                  onChange={handleUpdateFieldChange}
                  placeholder="Enter field name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              {updateField.name !== 'courseName' && ['radio', 'checkbox', 'dropdown'].includes(updateField.type) && (
                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Options <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {updateField.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-gray-200 text-sm sm:text-base flex-1">{option.value}</span>
                        <motion.button
                          type="button"
                          onClick={() => handleRemoveOption(option.value, setUpdateField)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-1 rounded-full bg-gray-700/50 hover:bg-red-600 transition-colors"
                        >
                          <FiTrash className="text-gray-200" />
                        </motion.button>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newOption}
                        onChange={(e) => setNewOption(e.target.value)}
                        onKeyDown={(e) => handleOptionKeyDown(e, setUpdateField)}
                        placeholder="Add option (press Enter)"
                        className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                      />
                      <motion.button
                        type="button"
                        onClick={() => handleAddOption(setUpdateField)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-colors"
                      >
                        <FiPlus className="text-lg" />
                      </motion.button>
                    </div>
                    {errors.options && <p className="text-red-500 text-xs mt-1">{errors.options}</p>}
                  </div>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="required"
                  checked={updateField.required}
                  onChange={handleUpdateFieldChange}
                  className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-600 rounded"
                />
                <label className="text-sm text-gray-300">Required</label>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={resetUpdateFieldModal}
                  className="px-4 py-2 rounded-lg bg-red-700 text-gray-200 hover:bg-red-600 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-colors text-sm sm:text-base"
                >
                  Update Field
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {isUpdateModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 w-full max-w-4xl max-h-[80vh] overflow-y-auto"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">Update Lead</h3>
            <form onSubmit={handleUpdateLead} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {activeFields.map((field) => (
                  <div key={field.name} className="relative">
                    <label className="block text-sm text-gray-300">
                      {field.name.charAt(0).toUpperCase() + field.name.slice(1)} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    {field.name === 'courseName' ? (
                      <select
                        name="courseName"
                        value={updateLead.courseName}
                        onChange={(e) => handleInputChange(e, setUpdateLead)}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                      >
                        <option value="" className="hover:bg-gray-600 cursor-pointer bg-gray-700" disabled>Select a course</option>
                        {courseTypes.map((type) => (
                          <option key={type.value} value={type.value} className="hover:bg-gray-600 cursor-pointer bg-gray-700">{type.value}</option>
                        ))}
                      </select>
                    ) : field.type === 'checkbox' ? (
                      <div className="space-y-2">
                        {field.options.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              name={field.name}
                              value={option.value}
                              checked={updateLead.customFields[field.name]?.includes(option.value) || false}
                              onChange={(e) => handleCustomFieldChange(e, field.name, field.type, setUpdateLead)}
                              className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-600 rounded"
                            />
                            <label className="text-sm text-gray-300">{option.value}</label>
                          </div>
                        ))}
                      </div>
                    ) : field.type === 'radio' ? (
                      <div className="space-y-2">
                        {field.options.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name={field.name}
                              value={option.value}
                              checked={updateLead.customFields[field.name] === option.value}
                              onChange={(e) => handleCustomFieldChange(e, field.name, field.type, setUpdateLead)}
                              className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-600 rounded"
                            />
                            <label className="text-sm text-gray-300">{option.value}</label>
                          </div>
                        ))}
                      </div>
                    ) : field.type === 'dropdown' ? (
                      <select
                        name={field.name}
                        value={updateLead.customFields[field.name] || ''}
                        onChange={(e) => handleCustomFieldChange(e, field.name, field.type, setUpdateLead)}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                      >
                        <option value="" className="hover:bg-gray-600 cursor-pointer bg-gray-700" disabled>Select an option</option>
                        {field.options.map((option) => (
                          <option key={option.value} value={option.value} className="hover:bg-gray-600 cursor-pointer bg-gray-700">
                            {option.value}
                          </option>
                        ))}
                      </select>
                    ) : field.type === 'textarea' ? (
                      <textarea
                        name={field.name}
                        value={updateLead.customFields[field.name] || ''}
                        onChange={(e) => handleCustomFieldChange(e, field.name, field.type, setUpdateLead)}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                        rows="4"
                      />
                    ) : field.type === 'file' ? (
                      <div className="relative">
                        <input
                          type="file"
                          name={field.name}
                          onChange={(e) => handleCustomFieldChange(e, field.name, field.type, setUpdateLead)}
                          className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                        />
                        {updateLead.customFields[field.name] && (
                          <p className="text-gray-300 text-xs mt-1">Selected: {updateLead.customFields[field.name]}</p>
                        )}
                      </div>
                    ) : (
                      <div className="relative">
                        {field.name === 'name' && <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                        {field.name === 'email' && <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                        {field.name === 'phone' && <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                        {field.name === 'registeredDate' && <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
                        <input
                          type={field.type}
                          name={field.name}
                          value={defaultFields.some((df) => df.name === field.name) ? updateLead[field.name] || '' : updateLead.customFields[field.name] || ''}
                          onChange={(e) => defaultFields.some((df) => df.name === field.name) ? handleInputChange(e, setUpdateLead) : handleCustomFieldChange(e, field.name, field.type, setUpdateLead)}
                          placeholder={field.name === 'phone' ? '1234567890' : undefined}
                          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                        />
                      </div>
                    )}
                    {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>}
                  </div>
                ))}
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={resetUpdateModal}
                  className="px-4 py-2 rounded-lg bg-red-700 text-gray-200 hover:bg-red-600 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-colors text-sm sm:text-base"
                >
                  Update
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {isAddCourseModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 w-full max-w-md sm:max-w-lg max-h-[80vh] overflow-y-auto"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">Add New Course Type</h3>
            <form onSubmit={handleAddCourseType} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300">
                  Course Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newCourseType}
                  onChange={handleCourseTypeChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                />
                {errors.courseType && <p className="text-red-500 text-xs mt-1">{errors.courseType}</p>}
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={resetAddCourseModal}
                  className="px-4 py-2 rounded-lg bg-red-700 text-gray-200 hover:bg-red-600 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-colors text-sm sm:text-base"
                >
                  <FiPlus className="inline mr-2" />
                  Add Course
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

       {isRemoveCourseModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 w-full max-w-md sm:max-w-lg max-h-[80vh] overflow-y-auto"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-4">Remove Course Types</h3>
            <form onSubmit={handleRemoveCourses} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Select course types to remove
                </label>
                {courseTypes.length > 0 ? (
                  <ul className="space-y-2 max-h-64 overflow-y-auto">
                    {courseTypes.map((type) => (
                      <li key={type.value} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedCoursesToRemove.includes(type.value)}
                          onChange={() => handleCourseRemoveSelection(type.value)}
                          className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-700 rounded bg-gray-800/50"
                        />
                        <span className="text-sm sm:text-base text-gray-200">{type.value}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm sm:text-base">No course types available.</p>
                )}
                {errors.remove && <p className="text-red-500 text-xs mt-2">{errors.remove}</p>}
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={resetRemoveCourseModal}
                  className="px-4 py-2 rounded-lg bg-red-700 text-gray-200 hover:bg-red-600 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={selectedCoursesToRemove.length === 0}
                  className={`px-4 py-2 rounded-lg text-white transition-colors text-sm sm:text-base ${
                    selectedCoursesToRemove.length === 0
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
                  }`}
                >
                  <FiTrash className="inline mr-2" />
                  Remove Selected
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

          {isDeleteModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 w-full max-w-md sm:max-w-lg max-h-[80vh] overflow-y-auto"
          >
            <h3 className="text-lg sm:text-xl font-medium text-gray-200 mb-4">Confirm Deletion</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Type <strong>delete</strong> to confirm deletion of {leadToDelete?.name}.
            </p>
            <input
              type="text"
              value={deleteConfirmation}
              onChange={(e) => setDeleteConfirmation(e.target.value)}
              placeholder="Type 'delete'"
              className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            />
            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={resetDeleteModal}
                className="px-4 py-2 rounded-lg bg-red-700 text-gray-200 hover:bg-red-600 transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteLead}
                disabled={deleteConfirmation.toLowerCase() !== 'delete'}
                className={`px-4 py-2 rounded-lg text-white transition-colors text-sm sm:text-base ${
                  deleteConfirmation.toLowerCase() !== 'delete'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
                }`}
              >
                <FiTrash2 className="inline mr-2" />
                Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Leads;