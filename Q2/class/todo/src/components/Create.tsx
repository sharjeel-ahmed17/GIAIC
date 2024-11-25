import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    upassword: "",
    umessage: "",
    index: "",
  });

  const [userData, setUserData] = useState([]);

  const getValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
        !formData.uname.trim() ||
        !formData.uemail.trim() ||
        !formData.upassword.trim() ||
        !formData.umessage.trim()
      ) {
        alert("All fields are required.");
        return;
      }
    const currentUserData = {
      uname: formData.uname,
      uemail: formData.uemail,
      upassword: formData.upassword,
      umessage: formData.umessage,
    };


    if(formData.index === ''){
let checkFIlterData = userData.filter((v)=>v.uname == formData.uname  ||  v.uemail == formData.uemail);
if(checkFIlterData.length == 1){
    alert('This username or email already exist');
    return;
}else{
    const updatedUserData : any = [...userData, currentUserData];
    setUserData(updatedUserData);
console.log('>>>user data' , updatedUserData);

    // Clear the form after submission
    setFormData({
      uname: "",
      uemail: "",
      upassword: "",
      umessage: "",
      index: "",
    });
}}else{
  let editIndex = formData.index;//1
  let oldData = userData;
  // [{},{}]
  oldData[editIndex]['uname']= formData.uname;
  oldData[editIndex]['uemail']= formData.uemail;
  oldData[editIndex]['upassword']= formData.upassword;
  oldData[editIndex]['umessage']= formData.umessage;
setUserData(oldData);

setFormData({
  uname: "",
  uemail: "",
  upassword: "",
  umessage: "",
  index: "",
});
}
  };

  const deleteRow = (indexNumber)=>{
    let filterData = userData.filter((v, i)=> i!=indexNumber);
    // console.log(filterData);
    
// alert(indexNumber)
setUserData(filterData);
  }
  const editRow = (indexNumber) =>{
    // alert(index);
    let editData  = userData.filter((v, i)=> i==indexNumber)[0];
    // console.log(editData);
    editData['index']= indexNumber
    // console.log(editData);
    setFormData(editData);
    
  }

  return (
    <div className="min-h-screen flex  bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 m-5">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Contact Form (Users: {userData.length})
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="uname">
              Username
            </label>
            <input
              type="text"
              name="uname"
              value={formData.uname}
              placeholder="Enter your username"
              onChange={getValue}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="uemail">
              Email
            </label>
            <input
              type="email"
              name="uemail"
              value={formData.uemail}
              placeholder="Enter your email"
              onChange={getValue}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="upassword">
              Password
            </label>
            <input
              type="password"
              name="upassword"
              value={formData.upassword}
              placeholder="Enter your password"
              onChange={getValue}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="umessage">
              Message
            </label>
            <textarea
              name="umessage"
              value={formData.umessage}
              placeholder="Write your message"
              onChange={getValue}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            
          >
            {formData.index !== "" ? "Update" : "Save"}
          </button>
        </form>
      </div>
      <div className="w-full mx-auto px-5 m-5">
      <table className="w-full border-collapse border border-gray-300 text-sm text-left">
  <thead className="bg-gray-100">
    
    <tr>
      <th className="border border-gray-300 px-4 py-2 font-medium text-gray-700 capitalize">id</th>
      <th className="border border-gray-300 px-4 py-2 font-medium text-gray-700 capitalize">name</th>
      <th className="border border-gray-300 px-4 py-2 font-medium text-gray-700 capitalize">email</th>
      <th className="border border-gray-300 px-4 py-2 font-medium text-gray-700 capitalize">password</th>
      <th className="border border-gray-300 px-4 py-2 font-medium text-gray-700 capitalize">message</th>
      <th className="border border-gray-300 px-4 py-2 font-medium text-gray-700 capitalize text-center">action</th>
    </tr>
  </thead>
  <tbody>
  {userData.length >= 1 ? 
  userData.map((item , index)=>{
    return(
        <tr className="hover:bg-gray-50" key={index}>
        <td className="border border-gray-300 px-4 py-2 text-gray-600">{index +1}</td>
        <td className="border border-gray-300 px-4 py-2 text-gray-600">{item.uname}</td>
        <td className="border border-gray-300 px-4 py-2 text-gray-600">{item.uemail}</td>
        <td className="border border-gray-300 px-4 py-2 text-gray-600">{item.upassword}</td>
        <td className="border border-gray-300 px-4 py-2 text-gray-600">{item.umessage}</td>
        <td className="border border-gray-300 px-4 py-2 text-gray-600 flex justify-around"><button onClick={()=>deleteRow(index)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">delete</button><button onClick={()=>editRow(index)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">edit</button></td>
      </tr>
    ) 
  })
  
   :<td className="border border-gray-300 px-4 py-2 text-gray-600" colSpan={6}>no data found</td> }
   
    
  </tbody>
</table>

      </div>
    </div>
  );
};

export default FormComponent;
