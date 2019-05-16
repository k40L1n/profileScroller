const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "Male",
    lookingFor: "Female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/85.jpg"
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "Female",
    lookingFor: "Male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/82.jpg"
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "Male",
    lookingFor: "Female",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/81.jpg"
  }
];

const profiles = profileIterator(data);
// Call first profile manually
nextProfile();

// Next events
document.getElementById("next").addEventListener("click", nextProfile);

// next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group text-center">
        <li class="list-group-item">
            Name : ${currentProfile.name}
        </li>
        <li class="list-group-item">
            Age : ${currentProfile.age}
        </li>
        <li class="list-group-item">
            Location : ${currentProfile.location}
        </li>
        <li class="list-group-item">
            Preference : ${currentProfile.gender}
        </li>
        <li class="list-group-item">
            Looking For : ${currentProfile.lookingFor}
        </li>
    </ul>
    `;
    // next image display
    document.getElementById("imageDisplay").innerHTML = `<img src="${
      currentProfile.image
    }">`;
  } else {
    // NO more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
