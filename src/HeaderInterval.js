import React, { useState, useEffect } from "react";

const strings = ["yes", "no", "maybe"];
let waitTime = 3000;
strings.forEach((string) => {
  setTimeout(() => (h1.textContent = string), waitTime);
  waitTime += 3000;
});
