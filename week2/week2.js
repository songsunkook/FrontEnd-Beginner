function toggleDisplaySensitiveContents() {
  const sensitiveContents =
    document.getElementsByClassName("sensitive_contents");
  const button = document.getElementById("toggle_button");

  for (i = 0; i < sensitiveContents.length; i++) {
    if (sensitiveContents[i].style.display == "none") {
      button.innerText = "개인 정보 숨기기";
      sensitiveContents[i].style.display = "block";
    } else {
      button.innerText = "개인 정보 보이기";
      sensitiveContents[i].style.display = "none";
    }
  }
}
