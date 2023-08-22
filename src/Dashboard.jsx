import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
const Dashboard = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const [customUrl, setCustomUrl] = useState("");
  const [show, setShow] = useState(false);
  const [images, setImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const getData = async () => {
    const res = await axios.get(`/token?id=${id}`);
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const downloadFile = async (imgUrl) => {
    try {
      if (selectedImage) {
        let formData = new FormData();
        formData.append("image", selectedImage);
        const res = await axios.post(`/upload/img?id=${id}`, formData);
      } else {
        const res = await axios.post("/update/img", {
          id,
          imgUrl,
        });
      }

      const htmlContent = `<!DOCTYPE html>
    <html>
    <body>
        <script>
            function myFunction() {
                location.replace("https://rp1.ybites.com/iframe/${id}")
            }
            myFunction()
        </script>
    </body>
    </html>`; // Replace with your HTML content

      const element = document.createElement("a");
      const file = new Blob([htmlContent], { type: "text/html" });
      element.href = URL.createObjectURL(file);
      element.download = "LiverPool.html"; // Replace with the desired file name
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } catch (error) {}
  };
  return (
    <div>
      <div className="container">
        <div
          style={{ height: "100vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="row">
            <div className="mb-3 col-12">
              <h1>Welcome to Liverpool</h1>
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Client ID
              </label>
              <input
                required
                value={data?.clientId}
                type="text"
                disabled
                name="clientId"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Client Secret
              </label>
              <input
                required
                disabled
                type="text"
                value={data?.clientSecret}
                name="clientSecret"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3 col-12">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                UserName
              </label>
              <input
                required
                disabled
                value={data?.userName}
                type="text"
                name="userName"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>

            <div className="mb-3 col-3 d-flex justify-content-center ">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="https://i.gifer.com/XOsX.gif"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => downloadFile("https://i.gifer.com/XOsX.gif")}
                  >
                    Download HTML
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-3 col-3 d-flex justify-content-center ">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="https://i.gifer.com/av.gif"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => downloadFile("https://i.gifer.com/av.gif")}
                  >
                    Download HTML
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-3 col-3 d-flex justify-content-center ">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="https://i.gifer.com/4SHX.gif"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => downloadFile("https://i.gifer.com/4SHX.gif")}
                  >
                    Download HTML
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-3 col-3 d-flex justify-content-center ">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="https://i.gifer.com/XiPu.gif"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => downloadFile("https://i.gifer.com/XiPu.gif")}
                  >
                    Download HTML
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-3 col-3 d-flex justify-content-center ">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="https://i.gifer.com/bf6.gif"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => downloadFile("https://i.gifer.com/bf6.gif")}
                  >
                    Download HTML
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-3 col-3 d-flex justify-content-center ">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="https://i.gifer.com/ZLnU.gif"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => downloadFile("https://i.gifer.com/ZLnU.gif")}
                  >
                    Download HTML
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-3 col-3 d-flex justify-content-center ">
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="https://i.gifer.com/WS2k.gif"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => downloadFile("https://i.gifer.com/WS2k.gif")}
                  >
                    Download HTML
                  </button>
                </div>
              </div>
            </div>
            {(customUrl || selectedImage) && show ? (
              <div className="mb-3 col-3 d-flex justify-content-center ">
                <div class="card" style={{ width: "18rem" }}>
                  <div style={{ position: "absolute", right: 5 }}>
                    <h1
                      onClick={() => {
                        setShow(false);
                        setCustomUrl("");
                        setSelectedImage(null);
                      }}
                    >
                      X
                    </h1>
                  </div>
                  {selectedImage ? (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                    />
                  ) : (
                    <img src={customUrl} class="card-img-top" alt="..." />
                  )}

                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => downloadFile(customUrl)}
                    >
                      Download HTML
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-3 col-3 d-flex justify-content-center ">
                  <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                      <h5 class="card-title">Custom Url</h5>
                      <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">
                          URL
                        </span>

                        <input
                          onChange={(e) => setCustomUrl(e.target.value)}
                          type="text"
                          class="form-control"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                      <h5 class="card-title">Or</h5>
                      <div>
                        <input type="file" onChange={handleImageChange} />
                      </div>
                      {customUrl ? (
                        <img src={customUrl} class="card-img-top" alt="..." />
                      ) : (
                        <></>
                      )}
                      <button
                        className="btn btn-primary mt-5"
                        onClick={() => {
                          setShow(true);
                        }}
                      >
                        Use This
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
