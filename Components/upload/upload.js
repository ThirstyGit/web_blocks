// Selecting necessary elements.
const fileInput = document.querySelector("#file-input");
const mainButton = document.querySelector("#main-button");
const previewImage = document.querySelector("#preview-image");
const uploadContainer = document.querySelector("#upload-container");
const cancelButton = document.querySelector("#cancel-button");
const uploadText = document.querySelector("#upload-text");

// Links for images. This will be used when
// anything other than images are uploaded.
const images = {
  rar: "https://img.icons8.com/fluency/48/000000/winrar.png",
};

// code to make the beautiful upload work.
mainButton.addEventListener("click", () => {
  fileInput.click();
});

cancelButton.addEventListener("click", () => {
  fileInput.value = "";
  previewImage.style.display = "none";
  previewImage.src = "";
  // This classes are to properly show image
  // previews that we want to upload.
  uploadContainer.classList.remove("active");
  uploadText.classList.remove("hidden");
});

fileInput.addEventListener("change", function () {
  if (this.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      console.log(this.files);
      if(this.files[0].type.includes('image')) {
        const result = reader.result;
        previewImage.src = result;
        // This classes are to properly show image
        // previews that we want to upload.
        previewImage.classList.add("preview-image");
        uploadText.classList.remove('hidden');
      }
      else {
        previewImage.src = images.rar;
        // Without this class we show the image as is.
        previewImage.classList.remove("preview-image");
        // Hiding the unnecessary text.
        // Might show useful text in the future.
        uploadText.classList.add("hidden");
      }
      uploadContainer.classList.add("active");
    };
    reader.readAsDataURL(this.files[0]);
  }
  previewImage.style.display = "grid";
});
