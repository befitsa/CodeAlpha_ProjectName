 document.getElementById("ageForm").addEventListener("submit", function (e) {
      e.preventDefault();

      // Get values from inputs
      const day = parseInt(document.getElementById("day").value);
      const month = parseInt(document.getElementById("month").value) - 1; // JS months = 0–11
      const year = parseInt(document.getElementById("year").value);

      // Input validation
      if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("⚠️ Please fill all the fields correctly!");
        return;
      }

      const dob = new Date(year, month, day);
      const today = new Date();

      // Prevent future dates
      if (dob > today) {
        document.getElementById("result").innerText = "❌ Invalid Date! Please choose a past date.";
        return;
      }

      // Working with Date & Time
      let years = today.getFullYear() - dob.getFullYear();
      let months = today.getMonth() - dob.getMonth();
      let days = today.getDate() - dob.getDate();

      // Adjust days
      if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
      }

      // Adjust months
      if (months < 0) {
        years--;
        months += 12;
      }

      // Update result dynamically (DOM Manipulation)
      document.getElementById("result").innerText = 
        `🎉 You are ${years} years, ${months} months, and ${days} days old.`;
    });