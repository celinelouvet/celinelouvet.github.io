'use client';

import Abstract from './Abstract';
import BeforeCC1 from './BeforeCC1';
import BeforeCC2 from './BeforeCC2';
import BeforeCC3 from './BeforeCC3';
import BeforeCC4 from './BeforeCC4';
import BeforeCC5 from './BeforeCC5';
import BeforeMe1 from './BeforeMe1';
import BeforeMe2 from './BeforeMe2';
import BeforeMe3 from './BeforeMe3';
import BeforeTimelineSectionTitle from './BeforeSectionTitle';
import CreationContact1 from './CreationContact1';
import CreationContact2 from './CreationContact2';
import CreationFinal1 from './CreationFinal1';
import CreationFinal2 from './CreationFinal2';
import CreationFinal3 from './CreationFinal3';
import CreationFinal4 from './CreationFinal4';
import CreationFinal5 from './CreationFinal5';
import CreationFinal6 from './CreationFinal6';
import CreationFinal7 from './CreationFinal7';
import CreationFinal8 from './CreationFinal8';
import CreationIdea1 from './CreationIdea1';
import CreationIdea2 from './CreationIdea2';
import CreationIdea3 from './CreationIdea3';
import CreationIdea4 from './CreationIdea4';
import CreationIdea5 from './CreationIdea5';
import CreationIdea6 from './CreationIdea6';
import CreationIdea7 from './CreationIdea7';
import CreationIdea8 from './CreationIdea8';
import CreationMarket1 from './CreationMarket1';
import CreationMarket2 from './CreationMarket2';
import CreationMarket3 from './CreationMarket3';
import CreationMarket4 from './CreationMarket4';
import CreationMarket5 from './CreationMarket5';
import CreationMarket6 from './CreationMarket6';
import CreationMeeting1 from './CreationMeeting1';
import CreationMeeting2 from './CreationMeeting2';
import CreationMeeting3 from './CreationMeeting3';
import CreationMeeting4 from './CreationMeeting4';
import CreationMeeting5 from './CreationMeeting5';
import CreationSectionTitle from './CreationSectionTitle';
import CreationTimeline1 from './CreationTimeline1';
import CreationTimeline2 from './CreationTimeline2';
import CreationTimeline3 from './CreationTimeline3';
import CreationTimeline4 from './CreationTimeline4';
import EndTitle from './EndTitle';
import Fairvioo1 from './Fairvioo1';
import Fairvioo2 from './Fairvioo2';
import Fairvioo3 from './Fairvioo3';
import Fairvioo4 from './Fairvioo4';
import Introduction from './Introduction';
import MainTitle from './MainTitle';
import Numbers1 from './Numbers1';
import Numbers2 from './Numbers2';
import Numbers3 from './Numbers3';
import Numbers4 from './Numbers4';
import Preface1 from './Preface1';
import Preface2 from './Preface2';
import Preface3 from './Preface3';
import Preface4 from './Preface4';
import PromotionLyonCraft from './PromotionLyonCraft';
import SurveySectionTitle from './SurveySectionTitle';
import Timeline from './Timeline';

export const getSlides = () => {
  const slides = [
    MainTitle,
    SurveySectionTitle,
    Introduction,

    Fairvioo1,
    Fairvioo2,
    Fairvioo3,
    Fairvioo4,

    Preface1,
    Preface2,
    Preface3,
    Preface4,

    Numbers1,
    Numbers2,
    Numbers3,
    Numbers4,

    Timeline,

    BeforeTimelineSectionTitle,
    BeforeMe1,
    BeforeMe2,
    BeforeMe3,

    BeforeCC1,
    BeforeCC2,
    BeforeCC3,
    BeforeCC4,
    BeforeCC5,

    CreationSectionTitle,
    CreationContact1,
    CreationContact2,

    CreationMeeting1,
    CreationMeeting2,
    CreationMeeting3,
    CreationMeeting4,
    CreationMeeting5,

    CreationIdea1,
    CreationIdea2,
    CreationIdea3,
    CreationIdea4,
    CreationIdea5,
    CreationIdea6,
    CreationIdea7,
    CreationIdea8,

    CreationMarket1,
    CreationMarket2,
    CreationMarket3,
    CreationMarket4,
    CreationMarket5,
    CreationMarket6,

    CreationTimeline1,
    CreationTimeline2,
    CreationTimeline3,
    CreationTimeline4,

    CreationFinal1,
    CreationFinal2,
    CreationFinal3,
    CreationFinal4,
    CreationFinal5,
    CreationFinal6,
    CreationFinal7,
    CreationFinal8,

    EndTitle,
    PromotionLyonCraft,
    Abstract,
  ];

  const contents = slides.map((slide, index) => ({
    ...slide.content,
    key: `content-${index}`,
  }));
  const notes = slides.map((slide, index) => ({
    ...slide.note,
    key: `notes-${index}`,
  }));

  return { contents, notes };
};
