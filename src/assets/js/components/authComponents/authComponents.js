
const BASE_URL = 'https://smartcampus.csie.ncku.edu.tw/smart_campus';

function inputGroupTemplate(field) {
  return `
    <div class="form-row">
      <div class="inputGroup">
        <span class="input-label">${field.label}</span>
        <input class="input-box" type="${field.type}" name="${field.label}">
      </div>
    </div>
  `;
}

function formTemplate(formMeta, fields) {
  return `
    <div class="popover authForm-pop ${formMeta.url}-pop">
      <div class="popover-inner">
        <h2 class="form-title">${formMeta.title}</h2>
        <form action="${BASE_URL}/${formMeta.url}/" method="${formMeta.method}">
          ${fields.map(inputGroupTemplate).join('')}
          <div class="form-row">
            <button class="btn--submit">Submit</button>
          </div>
        </form>
      </div>
    </div>`;
}

function loginFormTemplate() {
  const formData = {
    formMeta: {
      url: 'login',
      method: 'post',
      title: 'Login',
    },
    fields: [
      { label: 'email', type: 'email' },
      { label: 'password', type: 'password' },
    ],
  };
  return formTemplate(formData.formMeta, formData.fields);
}

function signupFormTemplate() {
  const formData = {
    formMeta: {
      url: 'signup',
      method: 'post',
      title: 'Signup',
    },
    fields: [
      { label: 'nickname', type: 'text' },
      { label: 'email', type: 'email' },
      { label: 'password', type: 'password' },
    ],
  };
  return formTemplate(formData.formMeta, formData.fields);
}

// Pop Menu of Avatar
// @Todo: Update links
function userMenuTemplate() {
  return ` 
    <div class="popover avatar-pop">
      <div class="popover-inner">
        <ul class="list">
          <li class="list-item"><a class="btn" href="#">Profile</a></li>
          <li class="list-item"><a class="btn" href="#">Setting</a></li>
          <li class="list-item"><a class="btn" href="#">Logout </a></li>
        </ul>
      </div>
    </div>`;
}

// avatar image e.g. https://cdn-images-1.medium.com/fit/c/32/32/1*EhFnVbXnRoEzBI6u97Bt7w.jpeg" alt="avatar
function authMenuItemTemplate(imageSrc) {
  return `
    <li class="nav-item">
      <button class="btn btn--reset">
        <div class="avatar">
          <img class="avatar-img" src="${imageSrc}">
        </div>
      </button>
    </li>`;
}

function unAuthMenuItemTemplate() {
  return `
    <li class="nav-item"><button id="btn--signup" class="btn btn--reset btn--icon">Signup</button></li>
    <li class="nav-item"><button id="btn--login" class="btn btn--reset btn--icon">Login</button></li>
  `;
}

export default {
  loginFormTemplate,
  signupFormTemplate,
  userMenuTemplate,
  authMenuItemTemplate,
  unAuthMenuItemTemplate,
};

