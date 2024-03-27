import React, { useState } from 'react';
import axios from 'axios';
const ContactUs = () => {
const [formData, setFormData] = useState({
firstName: '',
lastName: '',
company: '',
email: '',
phone: '',
message: '',
});
const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};
const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await axios.post('/api/contact', formData);
console.log(response.data);
} catch (error) {
console.error(error);
}
};
return (
<div>
<form onSubmit={handleSubmit}>
{/* Your form inputs */}
</form>
</div>
);
};
export default ContactUs;