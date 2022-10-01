async function LoadGit() {
  let response = await fetch("https://api.github.com/users/Krasavceva");
  let info = await response.json();
  return info;
}

function Github(info) {
  let container = document.createElement("div");
  let photo = document.createElement("img");
  photo.src = info.avatar_url;

  let pNode = document.createElement("p");
  pNode.textContent = info.name;

  container.append(pNode);
  container.append(photo);
  document.body.append(container);
}

async function init() {
  let info = await LoadGit();
  Github(info);
}

init();
