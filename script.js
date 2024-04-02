async function getPhotosPath(DIRPATH) {
  try {
    const response = await fetch(DIRPATH, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

const getPhoto = (path) => {
  return `<img path="${path}" alt="${path}"/>`;
};

const ItemCard = ({photoPath, userDis}) => {
  return `<div class="itemCard">
        <div class="item">
            <img src="${photoPath}" alt="${photoPath}">
        </div>
        <div class="item-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-person-circle" viewBox="0 0 16 16" title="Profile">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
            <div class="infos">${userDis}</div>
        </div>
    </div>`;
};

export { getPhotosPath, getPhoto, ItemCard };
