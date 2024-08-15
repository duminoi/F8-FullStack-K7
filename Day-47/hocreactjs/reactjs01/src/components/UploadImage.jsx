import React, { useEffect, useState } from "react";

export default function UploadImage() {
  const [img, setImg] = useState({});
  const [status, setStatus] = useState("idle");
  const handleChangeImage = (e) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setImg({ ...img, imagePreviewUrl: imageUrl, file: e.target.files[0] });
  };
  const requestUploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/files/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    } catch {
      return false;
    }
  };
  const handleUploadFile = async () => {
    setStatus("pending");
    const data = await requestUploadFile(img.file);
    setStatus("Upload");
    console.log(data);

    if (!data) {
      alert("Chưa upload được file");
    }
    setImg({ ...img, data, imagePreviewUrl: null });
    //Cập nhật state để hiển thị kết quả lên giao diện
  };
  useEffect(() => {
    console.log(`mount ${img.imagePreviewUrl}`);

    return () => {
      console.log(`clean ${img.imagePreviewUrl}`);
      URL.revokeObjectURL(img.imagePreviewUrl);
    };
  }, [img.imagePreviewUrl]);
  return (
    <div>
      <input type="file" name="image" onChange={handleChangeImage} />
      <button onClick={handleUploadFile}>
        {status == "pending" ? "Loading..." : "Upload"}
      </button>
      <div>
        {img.imagePreviewUrl && <img src={img.imagePreviewUrl} width={300} />}
      </div>
      {img.data && <span>Đã up load thành công</span>}
      <div>
        {img.data && (
          <a target="_blank" href={img.data.location}>
            {" "}
            {img.data.location}
          </a>
        )}
      </div>
    </div>
  );
}
