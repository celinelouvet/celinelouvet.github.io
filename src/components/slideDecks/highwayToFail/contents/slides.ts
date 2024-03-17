'use client';

import Abstract from './Abstract';
import BeforeMe1 from './BeforeMe1';
import BeforeMe2 from './BeforeMe2';
import BeforeMe3 from './BeforeMe3';
import BeforeTimelineSectionTitle from './BeforeSectionTitle';
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
