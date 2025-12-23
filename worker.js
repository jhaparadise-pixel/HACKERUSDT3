function randomHex(len) {
  const chars = "abcdef0123456789";
  let s = "";
  for (let i = 0; i < len; i++) {
    s += chars[Math.floor(Math.random() * chars.length)];
  }
  return s;
}

function fakeTronAddress() {
  // TRON 地址格式演示（T 开头）
  return "T" + randomHex(33);
}

onmessage = (e) => {
  const prefix = e.data.prefix;
  let count = 0;

  while (true) {
    const addr = fakeTronAddress();
    count++;

    if (addr.startsWith("T" + prefix)) {
      postMessage({
        found: true,
        address: addr,
        count
      });
      break;
    }

    if (count % 5000 === 0) {
      postMessage({
        found: false,
        count: 5000
      });
    }
  }
};
