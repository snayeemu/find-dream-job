// use local storage to manage cart data
const addToDb = (id) => {
  let savedJobs = getSavedJobs();
  // add quantity
  const quantity = savedJobs[id];
  if (!quantity) {
    savedJobs[id] = id;
  } else {
    return;
  }
  localStorage.setItem("saved-jobs", JSON.stringify(savedJobs));
};

const removeFromDb = (id) => {
  const savedJobs = getSavedJobs();
  if (id in savedJobs) {
    delete savedJobs[id];
    localStorage.setItem("saved-jobs", JSON.stringify(savedJobs));
  }
};

const getSavedJobs = () => {
  let savedJobs = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("saved-jobs");
  if (storedCart) {
    savedJobs = JSON.parse(storedCart);
  }
  return savedJobs;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("saved-jobs");
};

export { addToDb, removeFromDb, getSavedJobs, deleteShoppingCart };
