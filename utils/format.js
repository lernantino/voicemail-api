module.exports = {
    formatText: (text) => {
        return text.replace(/\w+@\w+\.\w+/, (match) => {
          return `<a href="mailto:${match}">${match}</a>`;
        });
    },
    formatPhone: (num) => {
        const number = num.toString();
        
        if (number.length >= 10) {
          return number.replace(
            /(\d{1,2})?(\d{3})(\d{3})(\d{4})/, 
            (match, p1, p2, p3, p4) => {
              // format basic digits
              let newNumber = `${p2}-${p3}-${p4}`;
    
              // prepend optional country code
              if (p1) {
                newNumber = `${p1}-${newNumber}`;
              }
    
              return newNumber;
            }
          );
        }
    
        return number;
    },
    formatDuration: (number) => {
        // convert to seconds
        const duration = Math.round(number / 1000);
    
        const hours = Math.round(duration / 3600);
        const minutes = Math.round((duration - (hours * 3600)) / 60);
        const seconds = duration - (hours * 3600) - (minutes * 60);
    
        let time = '';
    
        if (hours > 0) {
          // prepend leading zero
          if (hours < 10) {
            time += '0';
          }
    
          time += `${hours}:`;
        }
    
        if (minutes < 10) {
          time += '0';
        }
    
        time += `${minutes}:`;
    
        if (seconds < 10) {
          time += '0';
        }
    
        time += seconds;
    
        return time;
    },
    formatDate: () => {
        return;
    }
}