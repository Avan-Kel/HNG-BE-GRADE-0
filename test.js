import axios from "axios";

// To use this test file, you're to create another terminal and run the code "node test.js"

const BASE_URL = "http://localhost:3005";

async function testEndpoint() {
  try {
    const res = await axios.get(`${BASE_URL}/me`);
    if (res.status === 200 && res.data.status === "success") {
      console.log("The server '/me' endpoint Test Passed Successfully!");
    } else {
      console.log("The server '/me' endpoint Test Failed, Error Detected!");
    }
  } catch (err) {
    console.error("Error testing '/me' endpoint:", err.message);
  }
}

testEndpoint();