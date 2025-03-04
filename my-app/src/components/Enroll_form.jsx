import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EnrollForm() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    city: "",
    eligibility: "online",
    educationalStatus: "",
    age: "",
    course: "",
    gender: "male",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userToken");
    if (!user) {
      navigate("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (/\d/.test(formData.name)) newErrors.name = "No numbers in name";

    if (!formData.fatherName.trim()) newErrors.fatherName = "Required";
    if (!formData.city.trim()) newErrors.city = "Required";
    if (!formData.age) newErrors.age = "Required";
    else if (isNaN(formData.age) || formData.age < 1 || formData.age > 120)
      newErrors.age = "Valid age (1-120) required";

    if (!formData.course.trim()) newErrors.course = "Required";
    if (!formData.educationalStatus.trim()) newErrors.educationalStatus = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const response = await fetch("http://localhost:3000/api/auth/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setFormData({
        name: "",
        fatherName: "",
        city: "",
        eligibility: "online",
        educationalStatus: "",
        age: "",
        course: "",
        gender: "male",
      });

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      setErrors({ submit: "Submission failed, try again!" });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"
         style={{ backgroundImage: "url('/images/form.jpg')" }}>
      <div className="w-full max-w-lg bg-black-500 p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">Enrollment Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "fatherName", "city", "educationalStatus", "course", "age"].map((field) => (
            <div key={field}>
              <label className="block text-white capitalize" htmlFor={field}>
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                id={field}
                type={field === "age" ? "number" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                className={`w-full p-3 border rounded placeholder-white text-white bg-transparent ${errors[field] ? "border-red-500" : "border-gray-300"}`}
              />
              {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
            </div>
          ))}

          <div>
            <label className="block text-white">Eligibility</label>
            <select name="eligibility" value={formData.eligibility} onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded bg-transparent text-white">
              <option value="online">Online</option>
              <option value="physical">Physical</option>
            </select>
          </div>

          <div>
            <label className="block text-white">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded bg-transparent text-white">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <button type="submit" disabled={isLoading}
                  className="w-full bg-white text-blue-500 font-bold p-3 rounded hover:bg-gray-100 transition disabled:bg-gray-300">
            {isLoading ? "Submitting..." : "Submit"}
          </button>

          {isSubmitted && <p className="text-green-400 text-center mt-4">Enrollment successful!</p>}
          {errors.submit && <p className="text-red-500 text-center mt-4">{errors.submit}</p>}
        </form>
      </div>
    </div>
  );
}

export default EnrollForm;
