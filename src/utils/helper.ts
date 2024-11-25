import moment from "moment";

export const getInitials = (name: string) => {
    const words = name.split(' '); // Split name into words
    const initials = words.map((word) => word.charAt(0).toUpperCase()); // Get first letter of each word
    return initials.join(''); // Join the initials to form the avatar
  };

  export const formatTimestamp = (timestamp:moment.Moment) => {
    const now = moment();
    const time = moment(timestamp);
    const diffInMinutes = now.diff(time, 'minutes');
  
    if (diffInMinutes < 1) {
      return 'just now';
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} min ago`;
    } else {
      return time.format('h:mm A');
    }
  };
