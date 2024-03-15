import {
  FaCalendarDay,
  FaClock,
  FaDoorClosed,
  FaMapMarkerAlt,
  FaQuestion,
} from 'react-icons/fa';

export const promotionIcon = (name: string) => {
  switch (name) {
    case 'day':
      return FaCalendarDay;
    case 'time':
      return FaClock;
    case 'convention':
      return FaMapMarkerAlt;
    case 'room':
      return FaDoorClosed;
    default:
      return FaQuestion;
  }
};
