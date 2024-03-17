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
import CreationMeeting1 from './CreationMeeting1';
import CreationMeeting2 from './CreationMeeting2';
import CreationMeeting3 from './CreationMeeting3';
import CreationMeeting4 from './CreationMeeting4';
import CreationMeeting5 from './CreationMeeting5';
import CreationSectionTitle from './CreationSectionTitle';
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
