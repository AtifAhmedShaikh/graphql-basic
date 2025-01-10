const name = (userId, usersArray) => {
  return usersArray.find((user) => user.id === userId)?.name;
};

const phoneNumber = (userId, usersArray) => {
  return usersArray.find((user) => user.id === userId)?.phoneNumber;
};

const details = (userId, usersArray) => {
  return usersArray.find((user) => user.id === userId);
};

// in future we will use database for storing users
const createUser = (userDetails, usersArray) => {
  // Extract values from details and set defaults
  const { name = "", phoneNumber = 0, cnic = 0, fatherName = "" } = userDetails;
  usersArray.push({ name, phoneNumber, cnic, fatherName }); // insert in users array
  return usersArray;
};

const updateUserDetails = (userDetails, usersArray) => {
  const { name = "", phoneNumber = 0, cnic = 0, fatherName = "" } = userDetails;

  const userIndex = usersArray.findIndex((user) => user.cnic === cnic);

  if (userIndex === -1) {
    return `User with CNIC ${cnic} not found.`;
  }

  usersArray[userIndex] = { ...usersArray[userIndex], name, phoneNumber, fatherName };

  return usersArray;
};
module.exports = {
  name,
  phoneNumber,
  details,
  createUser,
  updateUserDetails,
};
