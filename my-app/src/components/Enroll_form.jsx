// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function EnrollForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     fatherName: "",
//     city: "",
//     eligibility: "online",
//     educationalStatus: "",
//     age: "",
//     course: "",
//     gender: "male",
//   });

//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   // Check if user is authenticated and redirect if not
//   useEffect(() => {
//     const user = localStorage.getItem("userToken");
//     if (!user) {
//       navigate("/login"); // Redirect to login if not authenticated
//     } else {
//       setIsAuthenticated(true);
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Clear errors when the user starts typing
//     if (errors[name]) {
//       setErrors({ ...errors, [name]: "" });
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (/\d/.test(formData.name)) {
//       newErrors.name = "Name should not contain numbers";
//     }

//     if (!formData.fatherName.trim()) {
//       newErrors.fatherName = "Father Name is required";
//     }

//     if (!formData.city.trim()) {
//       newErrors.city = "City is required";
//     }

//     if (!formData.age) {
//       newErrors.age = "Age is required";
//     } else if (isNaN(formData.age) || formData.age < 1 || formData.age > 120) {
//       newErrors.age = "Age must be a valid number between 1 and 120";
//     }

//     if (!formData.course.trim()) {
//       newErrors.course = "Course is required";
//     }

//     if (!formData.educationalStatus.trim()) {
//       newErrors.educationalStatus = "Educational Status is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsLoading(true);
//     setErrors({});

//     try {
//       const response = await fetch("http://localhost:3000/api/auth/enroll", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit form");
//       }

//       const result = await response.json();
//       console.log("Form Data Submitted Successfully:", result);

//       // Reset form data after successful submission
//       setFormData({
//         name: "",
//         fatherName: "",
//         city: "",
//         eligibility: "online",
//         educationalStatus: "",
//         age: "",
//         course: "",
//         gender: "male",
//       });

//       setIsSubmitted(true);
//       setTimeout(() => setIsSubmitted(false), 3000);
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setErrors({ submit: "Failed to submit form. Please try again." });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // This check is now optional because unauthenticated users will be redirected immediately.
//   if (!isAuthenticated) {
//     return null;
//   }

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/form.jpg')" }}
//     >
//       <div className="max-w-2xl mx-auto p-8 bg-blue shadow-lg rounded-lg">
//         <h2 className="text-3xl font-bold text-center text-white mb-6">
//           Enrollment Form
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name Field */}
//           <div>
//             <label htmlFor="name" className="block text-white">
//               Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className={`w-full p-2 border ${
//                 errors.name ? "border-red-500" : "border-gray-300"
//               } rounded`}
//               required
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//             )}
//           </div>

//           {/* Father Name Field */}
//           <div>
//             <label htmlFor="fatherName" className="block text-white">
//               Father Name
//             </label>
//             <input
//               id="fatherName"
//               type="text"
//               name="fatherName"
//               placeholder="Father Name"
//               value={formData.fatherName}
//               onChange={handleChange}
//               className={`w-full p-2 border ${
//                 errors.fatherName ? "border-red-500" : "border-gray-300"
//               } rounded`}
//               required
//             />
//             {errors.fatherName && (
//               <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>
//             )}
//           </div>

//           {/* City Field */}
//           <div>
//             <label htmlFor="city" className="block text-white">
//               City
//             </label>
//             <input
//               id="city"
//               type="text"
//               name="city"
//               placeholder="City"
//               value={formData.city}
//               onChange={handleChange}
//               className={`w-full p-2 border ${
//                 errors.city ? "border-red-500" : "border-gray-300"
//               } rounded`}
//               required
//             />
//             {errors.city && (
//               <p className="text-red-500 text-sm mt-1">{errors.city}</p>
//             )}
//           </div>

//           {/* Eligibility Field */}
//           <div>
//             <label htmlFor="eligibility" className="block text-white">
//               Eligibility
//             </label>
//             <select
//               id="eligibility"
//               name="eligibility"
//               value={formData.eligibility}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             >
//               <option value="online">Online</option>
//               <option value="physical">Physical</option>
//             </select>
//           </div>

//           {/* Educational Status Field */}
//           <div>
//             <label htmlFor="educationalStatus" className="block text-white">
//               Educational Status
//             </label>
//             <input
//               id="educationalStatus"
//               type="text"
//               name="educationalStatus"
//               placeholder="Educational Status"
//               value={formData.educationalStatus}
//               onChange={handleChange}
//               className={`w-full p-2 border ${
//                 errors.educationalStatus ? "border-red-500" : "border-gray-300"
//               } rounded`}
//               required
//             />
//             {errors.educationalStatus && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.educationalStatus}
//               </p>
//             )}
//           </div>

//           {/* Age Field */}
//           <div>
//             <label htmlFor="age" className="block text-white">
//               Age
//             </label>
//             <input
//               id="age"
//               type="number"
//               name="age"
//               placeholder="Age"
//               value={formData.age}
//               onChange={handleChange}
//               className={`w-full p-2 border ${
//                 errors.age ? "border-red-500" : "border-gray-300"
//               } rounded`}
//               required
//             />
//             {errors.age && (
//               <p className="text-red-500 text-sm mt-1">{errors.age}</p>
//             )}
//           </div>

//           {/* Course Field */}
//           <div>
//             <label htmlFor="course" className="block text-white">
//               Course
//             </label>
//             <input
//               id="course"
//               type="text"
//               name="course"
//               placeholder="Course"
//               value={formData.course}
//               onChange={handleChange}
//               className={`w-full p-2 border ${
//                 errors.course ? "border-red-500" : "border-gray-300"
//               } rounded`}
//               required
//             />
//             {errors.course && (
//               <p className="text-red-500 text-sm mt-1">{errors.course}</p>
//             )}
//           </div>

//           {/* Gender Field */}
//           <div>
//             <label htmlFor="gender" className="block text-white">
//               Gender
//             </label>
//             <select
//               id="gender"
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             >
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition disabled:bg-blue-300"
//           >
//             {isLoading ? "Submitting..." : "Submit"}
//           </button>

//           {isSubmitted && (
//             <p className="text-green-500 text-center mt-4">
//               Enrollment successful!
//             </p>
//           )}
//           {errors.submit && (
//             <p className="text-red-500 text-center mt-4">{errors.submit}</p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default EnrollForm;
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

  // Check if user is authenticated and redirect if not
  useEffect(() => {
    const user = localStorage.getItem("userToken");
    if (!user) {
      navigate("/login"); // Redirect to login if not authenticated
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors when the user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (/\d/.test(formData.name)) {
      newErrors.name = "Name should not contain numbers";
    }

    if (!formData.fatherName.trim()) {
      newErrors.fatherName = "Father Name is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age) || formData.age < 1 || formData.age > 120) {
      newErrors.age = "Age must be a valid number between 1 and 120";
    }

    if (!formData.course.trim()) {
      newErrors.course = "Course is required";
    }

    if (!formData.educationalStatus.trim()) {
      newErrors.educationalStatus = "Educational Status is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await fetch("http://localhost:3000/api/auth/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Form Data Submitted Successfully:", result);

      // Reset form data after successful submission
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
      console.error("Form submission error:", error);
      setErrors({ submit: "Failed to submit form. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  // This check is now optional because unauthenticated users will be redirected immediately.
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/form.jpg')" }}
    >
      <div className="max-w-3xl mx-auto p-8 bg-blue shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Enrollment Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-white">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-[500px] p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded`}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Father Name Field */}
          <div>
            <label htmlFor="fatherName" className="block text-white">
              Father Name
            </label>
            <input
              id="fatherName"
              type="text"
              name="fatherName"
              placeholder="Father Name"
              value={formData.fatherName}
              onChange={handleChange}
              className={`w-[500px] p-3 border ${
                errors.fatherName ? "border-red-500" : "border-gray-300"
              } rounded`}
              required
            />
            {errors.fatherName && (
              <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>
            )}
          </div>

          {/* City Field */}
          <div>
            <label htmlFor="city" className="block text-white">
              City
            </label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className={`w-[500px] p-3 border ${
                errors.city ? "border-red-500" : "border-gray-300"
              } rounded`}
              required
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          {/* Eligibility Field */}
          <div>
            <label htmlFor="eligibility" className="block text-white">
              Eligibility
            </label>
            <select
              id="eligibility"
              name="eligibility"
              value={formData.eligibility}
              onChange={handleChange}
              className="w-[500px] p-3 border border-gray-300 rounded"
            >
              <option value="online">Online</option>
              <option value="physical">Physical</option>
            </select>
          </div>

          {/* Educational Status Field */}
          <div>
            <label htmlFor="educationalStatus" className="block text-white">
              Educational Status
            </label>
            <input
              id="educationalStatus"
              type="text"
              name="educationalStatus"
              placeholder="Educational Status"
              value={formData.educationalStatus}
              onChange={handleChange}
              className={`w-[500px] p-3 border ${
                errors.educationalStatus ? "border-red-500" : "border-gray-300"
              } rounded`}
              required
            />
            {errors.educationalStatus && (
              <p className="text-red-500 text-sm mt-1">
                {errors.educationalStatus}
              </p>
            )}
          </div>

          {/* Age Field */}
          <div>
            <label htmlFor="age" className="block text-white">
              Age
            </label>
            <input
              id="age"
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className={`w-[500px] p-3 border ${
                errors.age ? "border-red-500" : "border-gray-300"
              } rounded`}
              required
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age}</p>
            )}
          </div>

          {/* Course Field */}
          <div>
            <label htmlFor="course" className="block text-white">
              Course
            </label>
            <input
              id="course"
              type="text"
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleChange}
              className={`w-[500px] p-3 border ${
                errors.course ? "border-red-500" : "border-gray-300"
              } rounded`}
              required
            />
            {errors.course && (
              <p className="text-red-500 text-sm mt-1">{errors.course}</p>
            )}
          </div>

          {/* Gender Field */}
          <div>
            <label htmlFor="gender" className="block text-white">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-[500px] p-3 border border-gray-300 rounded"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-[500px] bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition disabled:bg-blue-300"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>

          {isSubmitted && (
            <p className="text-green-500 text-center mt-4">
              Enrollment successful!
            </p>
          )}
          {errors.submit && (
            <p className="text-red-500 text-center mt-4">{errors.submit}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default EnrollForm;
