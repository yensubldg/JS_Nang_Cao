// Closure
function createCounter() {
  let count = 0;
  function increse() {
    return count++;
  }

  return increse;
}

const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

function createLogger(pre) {
  function log(message) {
    console.log(`${pre} ${message}`);
  }
  return log;
}

// Register
// const infoLogger = createLogger("[Info]");

// infoLogger("Bắt đầu gửi mail");
// infoLogger("Gửi mail lỗi lần 1, thử gửi lại...");
// infoLogger("Gửi mail lỗi lần 2, thử gửi lại...");
// infoLogger("Gửi mail thành công");

// Forgot Password

// const errorLogger = createLogger("[Error]");

// errorLogger("Email không tồn tại trong DB");

//

function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};
  const save = () => localStorage.setItem(key, JSON.stringify(store));
  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
      save();
    },
  };

  return storage;
}

const profileSetting = createStorage("profile");

profileSetting.set("fullName", "Nguyễn Văn A");
profileSetting.set("age", 20);
