const temp = 0;
const speed = 0;
const calculateWindChill = (temperature, velocity) => (temperature > 50 || velocity <= 3) ? "N/A" : Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(velocity, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
