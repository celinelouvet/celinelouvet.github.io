import {
  BsCalendar2EventFill,
  BsClockFill,
  BsDoorOpenFill,
  BsFillQuestionCircleFill,
  BsPinMapFill,
} from 'react-icons/bs';

export const promotionIcon = (name: string) => {
  switch (name) {
    case 'day':
      return BsCalendar2EventFill;
    case 'time':
      return BsClockFill;
    case 'convention':
      return BsPinMapFill;
    case 'room':
      return BsDoorOpenFill;
    default:
      return BsFillQuestionCircleFill;
  }
};
