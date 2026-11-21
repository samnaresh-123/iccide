export interface CampusPhoto {
  id: string;
  title: string;
  subtitle: string;
  src: string;
}

export interface GalleryAlbum {
  id: number;
  title: string;
  category: string;
  imageCount: number;
  coverUrl: string;
  date: string;
  vitapUrl: string;
}

export const currentCampusPhotos: CampusPhoto[] = [
  {
    id: "ab1",
    title: "Academic Block 1",
    subtitle: "Central Administrative & Classroom Complex",
    src: "/AB1.avif",
  },
  {
    id: "ab2",
    title: "Academic Block 2",
    subtitle: "Sarvepalli Radhakrishnan Academic Block",
    src: "/AB2.avif",
  },
  {
    id: "cafeteria",
    title: "Student Cafeteria",
    subtitle: "Multi-Cuisine Dining & Student Lounge",
    src: "/Cafeteria.avif",
  },
  {
    id: "banner1",
    title: "Campus Aerial View",
    subtitle: "State-of-the-art Amaravati Campus",
    src: "/banner1.avif",
  },
];

export const vitapGalleryAlbums: GalleryAlbum[] = [
  {
    "id": 106,
    "title": "59th National Library Week",
    "category": "Celebrations",
    "imageCount": 9,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/National_Library_Week_2026_5_1ce3c586c1.avif",
    "date": "2026-11-14",
    "vitapUrl": "https://vitap.ac.in/gallery/106"
  },
  {
    "id": 105,
    "title": "6th Annual Convocation",
    "category": "University Milestones",
    "imageCount": 30,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Convocation26_12_bf2763e715.avif",
    "date": "2026-09-30",
    "vitapUrl": "https://vitap.ac.in/gallery/105"
  },
  {
    "id": 104,
    "title": "Industry Conclave - 2026",
    "category": "Conferences & Conclaves",
    "imageCount": 51,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Industry_Conclave2026_20_19f657e3de.avif",
    "date": "2026-09-22",
    "vitapUrl": "https://vitap.ac.in/gallery/104"
  },
  {
    "id": 103,
    "title": "V-TAPP 2026",
    "category": "Fests & Activities",
    "imageCount": 27,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/VTAPP_1109_19_873dd0a739.avif",
    "date": "2026-09-13",
    "vitapUrl": "https://vitap.ac.in/gallery/103"
  },
  {
    "id": 100,
    "title": "Viksit Bharat Young Leaders Dialogue (VBYLD) 2026",
    "category": "Campus Life",
    "imageCount": 44,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Viksit_Bharat_YLD_2026_44_7d87e49228.avif",
    "date": "2026-09-13",
    "vitapUrl": "https://vitap.ac.in/gallery/100"
  },
  {
    "id": 99,
    "title": "Teacher's Day Celebration 2026",
    "category": "Campus Life",
    "imageCount": 25,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Teachers_Day_2026_1_bd9a08dd1c.avif",
    "date": "2026-09-09",
    "vitapUrl": "https://vitap.ac.in/gallery/99"
  },
  {
    "id": 95,
    "title": "Freshers Orientation program - VSB",
    "category": "University Milestones",
    "imageCount": 11,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Orientation2026_VSB_8_4b464d2df1.avif",
    "date": "2026-08-19",
    "vitapUrl": "https://vitap.ac.in/gallery/95"
  },
  {
    "id": 94,
    "title": "80th Independence Day Celebrations",
    "category": "Celebrations",
    "imageCount": 31,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Independance_day2026_a46424489c.avif",
    "date": "2026-08-18",
    "vitapUrl": "https://vitap.ac.in/gallery/94"
  },
  {
    "id": 93,
    "title": "IC4AI 2026",
    "category": "Conferences & Conclaves",
    "imageCount": 33,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/IC_4_AI_26_33_2c80b0b067.avif",
    "date": "2026-07-21",
    "vitapUrl": "https://vitap.ac.in/gallery/93"
  },
  {
    "id": 92,
    "title": "ICRAM'26",
    "category": "Conferences & Conclaves",
    "imageCount": 27,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/ICRAM_26_2_4083362d5e.avif",
    "date": "2026-07-08",
    "vitapUrl": "https://vitap.ac.in/gallery/92"
  },
  {
    "id": 91,
    "title": "International Day Against Drug Abuse and Illicit Trafficking Programme",
    "category": "Celebrations",
    "imageCount": 32,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/EAGLE_24_cf1c4be341.avif",
    "date": "2026-06-27",
    "vitapUrl": "https://vitap.ac.in/gallery/91"
  },
  {
    "id": 90,
    "title": "1st Amaravati International FIDE Rating Chess Tournament",
    "category": "Fests & Activities",
    "imageCount": 97,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Chess_Tournament_7_5e509d1d02.avif",
    "date": "2026-06-02",
    "vitapUrl": "https://vitap.ac.in/gallery/90"
  },
  {
    "id": 89,
    "title": "77th Republic Day Celebrations",
    "category": "Celebrations",
    "imageCount": 26,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/77th_Republic_Day_10_6907ba3941.avif",
    "date": "2026-05-28",
    "vitapUrl": "https://vitap.ac.in/gallery/89"
  },
  {
    "id": 88,
    "title": "9th University Day Celebrations",
    "category": "University Milestones",
    "imageCount": 51,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/UDC_13_972cced964.avif",
    "date": "2026-05-26",
    "vitapUrl": "https://vitap.ac.in/gallery/88"
  },
  {
    "id": 87,
    "title": "Graduating -2026 Batch",
    "category": "University Milestones",
    "imageCount": 45,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Graduating_2026_Batch_1_30e78cf19f.JPG",
    "date": "2026-05-09",
    "vitapUrl": "https://vitap.ac.in/gallery/87"
  },
  {
    "id": 86,
    "title": "ICPIL26",
    "category": "Conferences & Conclaves",
    "imageCount": 38,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/ICPIL_26_21_527cd1b306.avif",
    "date": "2026-04-30",
    "vitapUrl": "https://vitap.ac.in/gallery/86"
  },
  {
    "id": 85,
    "title": "ICAMEMS 2026",
    "category": "Conferences & Conclaves",
    "imageCount": 15,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/ICAMEMS_26_12_14d2af60e6.avif",
    "date": "2026-04-29",
    "vitapUrl": "https://vitap.ac.in/gallery/85"
  },
  {
    "id": 84,
    "title": "Psychology Lab Inauguration - 21.04.2026",
    "category": "University Milestones",
    "imageCount": 9,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Psychology_Lab_3_c1311334a6.avif",
    "date": "2026-04-28",
    "vitapUrl": "https://vitap.ac.in/gallery/84"
  },
  {
    "id": 83,
    "title": "V-Launchpad 2026",
    "category": "Fests & Activities",
    "imageCount": 38,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/V_Launchpad26_17_479f9e316c.avif",
    "date": "2026-04-21",
    "vitapUrl": "https://vitap.ac.in/gallery/83"
  },
  {
    "id": 82,
    "title": "2nd International Higher Education Fair (IHEF) 2026",
    "category": "Campus Life",
    "imageCount": 14,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/IHEF_2026_7_504f06f5b9.avif",
    "date": "2026-03-23",
    "vitapUrl": "https://vitap.ac.in/gallery/82"
  },
  {
    "id": 81,
    "title": "National Science Day 2026",
    "category": "Celebrations",
    "imageCount": 52,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/NSD_2_36_f7706fbb86.avif",
    "date": "2026-03-23",
    "vitapUrl": "https://vitap.ac.in/gallery/81"
  },
  {
    "id": 80,
    "title": "International Women’s Day Celebrations 2026",
    "category": "Celebrations",
    "imageCount": 72,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/WDC_61_580b074a5c.avif",
    "date": "2026-03-18",
    "vitapUrl": "https://vitap.ac.in/gallery/80"
  },
  {
    "id": 79,
    "title": "VITopia 2026",
    "category": "Fests & Activities",
    "imageCount": 30,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/VI_Topia26_17_9a92d6795b.avif",
    "date": "2026-03-17",
    "vitapUrl": "https://vitap.ac.in/gallery/79"
  },
  {
    "id": 78,
    "title": "5th Annual Convocation",
    "category": "University Milestones",
    "imageCount": 52,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/5thconvo_3_159d55ce87.avif",
    "date": "2025-12-09",
    "vitapUrl": "https://vitap.ac.in/gallery/78"
  },
  {
    "id": 77,
    "title": "79th Independence Day Celebrations",
    "category": "Celebrations",
    "imageCount": 49,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/79th_Independence_day_17_597f80a132.avif",
    "date": "2025-08-19",
    "vitapUrl": "https://vitap.ac.in/gallery/77"
  },
  {
    "id": 76,
    "title": "8th University Day Celebrations VIT-AP",
    "category": "University Milestones",
    "imageCount": 39,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/8th_University_Day_Celebrations_38_a81886f639.avif",
    "date": "2025-08-05",
    "vitapUrl": "https://vitap.ac.in/gallery/76"
  },
  {
    "id": 75,
    "title": "V-Lunchpad 2025",
    "category": "Campus Life",
    "imageCount": 22,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/V_Launchpad_10_ede550c77a.avif",
    "date": "2025-05-05",
    "vitapUrl": "https://vitap.ac.in/gallery/75"
  },
  {
    "id": 74,
    "title": "The Hon'ble CM's Visit to Campus",
    "category": "University Milestones",
    "imageCount": 45,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/cmv_10_9b279fb2cf.avif",
    "date": "2025-05-05",
    "vitapUrl": "https://vitap.ac.in/gallery/74"
  },
  {
    "id": 73,
    "title": "VITopia 2025",
    "category": "Fests & Activities",
    "imageCount": 117,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/VI_Topia_51_141cb42dcb.avif",
    "date": "2025-05-03",
    "vitapUrl": "https://vitap.ac.in/gallery/73"
  },
  {
    "id": 72,
    "title": "International Women's Day 2025",
    "category": "Celebrations",
    "imageCount": 17,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Int_Wom_Day_14_b6d04bbe4d.avif",
    "date": "2025-05-03",
    "vitapUrl": "https://vitap.ac.in/gallery/72"
  },
  {
    "id": 71,
    "title": "National Science Day 2025",
    "category": "Celebrations",
    "imageCount": 30,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/NSD_25_7_ca8e0ca9e3.avif",
    "date": "2025-04-30",
    "vitapUrl": "https://vitap.ac.in/gallery/71"
  },
  {
    "id": 70,
    "title": "NAADh 2025",
    "category": "Campus Life",
    "imageCount": 20,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/NAA_Dh_18_717c06dd21.avif",
    "date": "2025-04-19",
    "vitapUrl": "https://vitap.ac.in/gallery/70"
  },
  {
    "id": 69,
    "title": "LLM Work shop boot camp 2025",
    "category": "Conferences & Conclaves",
    "imageCount": 15,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/LLM_Workshop_4_dd92ebce56.avif",
    "date": "2025-04-19",
    "vitapUrl": "https://vitap.ac.in/gallery/69"
  },
  {
    "id": 68,
    "title": "4th Anual ICISD the Inaugural Ceremony 2025",
    "category": "Conferences & Conclaves",
    "imageCount": 20,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/ICISD_25_12_a0e17af5a1.avif",
    "date": "2025-04-19",
    "vitapUrl": "https://vitap.ac.in/gallery/68"
  },
  {
    "id": 66,
    "title": "National Level Hackathon X 2025",
    "category": "Conferences & Conclaves",
    "imageCount": 37,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/NL_Hx_11_4e5276f917.avif",
    "date": "2025-04-16",
    "vitapUrl": "https://vitap.ac.in/gallery/66"
  },
  {
    "id": 65,
    "title": "76th Republic Day Celebrations 2025",
    "category": "Celebrations",
    "imageCount": 11,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/76th_RDC_8_3840ebfe0c.avif",
    "date": "2025-04-15",
    "vitapUrl": "https://vitap.ac.in/gallery/65"
  },
  {
    "id": 64,
    "title": "15th National Voters’ Day 2025",
    "category": "Celebrations",
    "imageCount": 12,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/15th_NVD_5_b2252b868a.avif",
    "date": "2025-04-15",
    "vitapUrl": "https://vitap.ac.in/gallery/64"
  },
  {
    "id": 63,
    "title": "Support the Advancement of Rural Students( STARS ) - 2024",
    "category": "University Milestones",
    "imageCount": 5,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/STARS_24_3_be4b9e7936.avif",
    "date": "2025-04-04",
    "vitapUrl": "https://vitap.ac.in/gallery/63"
  },
  {
    "id": 62,
    "title": "1st International Higher Education Fair (IHEF) 2024",
    "category": "Campus Life",
    "imageCount": 29,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/IHEF_2024_12_c3ecfccb24.avif",
    "date": "2025-03-28",
    "vitapUrl": "https://vitap.ac.in/gallery/62"
  },
  {
    "id": 61,
    "title": "Engineering Clinics Expo 2024",
    "category": "Campus Life",
    "imageCount": 5,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Engineering_Clinics_Expo_1_8d6f65716e.avif",
    "date": "2025-03-28",
    "vitapUrl": "https://vitap.ac.in/gallery/61"
  },
  {
    "id": 60,
    "title": "VIT-AP Innovation Knowledge Acquisition Summit - 24 (V.I.K.A.S. - 24)",
    "category": "Conferences & Conclaves",
    "imageCount": 13,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/IHEF_4_9be17d0d52.avif",
    "date": "2025-03-28",
    "vitapUrl": "https://vitap.ac.in/gallery/60"
  },
  {
    "id": 59,
    "title": "4th IEEE International Conference on Artificial Intelligence and Signal Processing",
    "category": "Conferences & Conclaves",
    "imageCount": 10,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/AISP_24_6_98528ee7e2.avif",
    "date": "2025-03-27",
    "vitapUrl": "https://vitap.ac.in/gallery/59"
  },
  {
    "id": 58,
    "title": "4th Annual Convocation 2024",
    "category": "University Milestones",
    "imageCount": 38,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/4th_Annual_Convocation_36_7ef27c9b6b.avif",
    "date": "2025-03-27",
    "vitapUrl": "https://vitap.ac.in/gallery/58"
  },
  {
    "id": 57,
    "title": "78th Independence Day Celebrations",
    "category": "Celebrations",
    "imageCount": 9,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/78th_Independance_Day_1_0d194a8dcc.avif",
    "date": "2025-03-27",
    "vitapUrl": "https://vitap.ac.in/gallery/57"
  },
  {
    "id": 56,
    "title": "International Women's Day 2024",
    "category": "Celebrations",
    "imageCount": 5,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/IWD_5_e74a2d4910.avif",
    "date": "2025-03-26",
    "vitapUrl": "https://vitap.ac.in/gallery/56"
  },
  {
    "id": 55,
    "title": "National Science Day 2024",
    "category": "Celebrations",
    "imageCount": 6,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/NSD_6_69b8d48104.avif",
    "date": "2025-03-25",
    "vitapUrl": "https://vitap.ac.in/gallery/55"
  },
  {
    "id": 54,
    "title": "VITopia 2024",
    "category": "Fests & Activities",
    "imageCount": 31,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/VI_Topia_27_efa93237b5.avif",
    "date": "2025-03-25",
    "vitapUrl": "https://vitap.ac.in/gallery/54"
  },
  {
    "id": 53,
    "title": "International Technical Fest (V-TAPP) 2024",
    "category": "Fests & Activities",
    "imageCount": 16,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/VTAPP_12_7431808e24.avif",
    "date": "2025-03-25",
    "vitapUrl": "https://vitap.ac.in/gallery/53"
  },
  {
    "id": 52,
    "title": "75th Republic Day Celebrations",
    "category": "Celebrations",
    "imageCount": 5,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/75th_Republic_Day_1_842d180786.avif",
    "date": "2025-03-21",
    "vitapUrl": "https://vitap.ac.in/gallery/52"
  },
  {
    "id": 51,
    "title": "VSB Workshop",
    "category": "Conferences & Conclaves",
    "imageCount": 14,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/20191109164801_IMG_3461_094ccb1056.avif",
    "date": "2024-05-23",
    "vitapUrl": "https://vitap.ac.in/gallery/51"
  },
  {
    "id": 50,
    "title": "Toonz Gallery",
    "category": "Campus Life",
    "imageCount": 10,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/KKK_8447_3000x2000_fdef20272e.avif",
    "date": "2024-05-23",
    "vitapUrl": "https://vitap.ac.in/gallery/50"
  },
  {
    "id": 49,
    "title": "Talk on Lacan",
    "category": "Campus Life",
    "imageCount": 10,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/fdp_english_52e70ad686.avif",
    "date": "2024-05-23",
    "vitapUrl": "https://vitap.ac.in/gallery/49"
  },
  {
    "id": 48,
    "title": "RACSPA",
    "category": "Campus Life",
    "imageCount": 16,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/KKK_3299_6207546afd.avif",
    "date": "2024-05-23",
    "vitapUrl": "https://vitap.ac.in/gallery/48"
  },
  {
    "id": 47,
    "title": "National karate championship 2019",
    "category": "Fests & Activities",
    "imageCount": 9,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/20190715_093324_809b5e194d.avif",
    "date": "2024-05-23",
    "vitapUrl": "https://vitap.ac.in/gallery/47"
  },
  {
    "id": 46,
    "title": "Dhwani's play - Jyotir Gamaya",
    "category": "Fests & Activities",
    "imageCount": 7,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/4b_3000x2000_de28f551d7.avif",
    "date": "2024-05-23",
    "vitapUrl": "https://vitap.ac.in/gallery/46"
  },
  {
    "id": 45,
    "title": "Dhwani  Skit- 8th March",
    "category": "Fests & Activities",
    "imageCount": 29,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/1_1_df9550feef.avif",
    "date": "2024-05-23",
    "vitapUrl": "https://vitap.ac.in/gallery/45"
  },
  {
    "id": 44,
    "title": "Dean Dr Raju Balakrishnan, University of Michigan, Dearborn (UMD) visited VIT-AP School of Business (VSB)",
    "category": "Campus Life",
    "imageCount": 9,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/KKK_2864_3000x2000_fbb47cec56.avif",
    "date": "2024-05-23",
    "vitapUrl": "https://vitap.ac.in/gallery/44"
  },
  {
    "id": 43,
    "title": "counselling 2019",
    "category": "University Milestones",
    "imageCount": 14,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/KKK_9764_b5f957d118.avif",
    "date": "2024-05-23",
    "vitapUrl": "https://vitap.ac.in/gallery/43"
  },
  {
    "id": 42,
    "title": "Chancellor’s greetings to vice president of India",
    "category": "Campus Life",
    "imageCount": 5,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/003_ba098e4d24.avif",
    "date": "2024-05-23",
    "vitapUrl": "https://vitap.ac.in/gallery/42"
  },
  {
    "id": 41,
    "title": "STARS",
    "category": "University Milestones",
    "imageCount": 39,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/KKK_2806_32fecece42.avif",
    "date": "2024-05-21",
    "vitapUrl": "https://vitap.ac.in/gallery/41"
  },
  {
    "id": 40,
    "title": "Treasure Hunt",
    "category": "Fests & Activities",
    "imageCount": 15,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Treasure_Hunt_2_f3995d6195.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/40"
  },
  {
    "id": 39,
    "title": "Tera Time Aagaya",
    "category": "Campus Life",
    "imageCount": 17,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/TTA_DB_2_9016cf3347.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/39"
  },
  {
    "id": 38,
    "title": "Online Quiz Competition",
    "category": "Fests & Activities",
    "imageCount": 3,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/congratualtions_poster_02_120a3748f0.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/38"
  },
  {
    "id": 37,
    "title": "Kite Flying Competition",
    "category": "Fests & Activities",
    "imageCount": 11,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Kite_Flying_11_448158e0d1.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/37"
  },
  {
    "id": 36,
    "title": "Dhwani' Trick or Treat",
    "category": "Fests & Activities",
    "imageCount": 16,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/2_Copy_c268a7462d.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/36"
  },
  {
    "id": 35,
    "title": "Dhwani' Talethon",
    "category": "Fests & Activities",
    "imageCount": 12,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/2_e18fe2e245.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/35"
  },
  {
    "id": 34,
    "title": "Dhwani' Street Play Workshop",
    "category": "Conferences & Conclaves",
    "imageCount": 18,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/2_4b67ef58cc.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/34"
  },
  {
    "id": 33,
    "title": "Dhwani's Sparklit",
    "category": "Fests & Activities",
    "imageCount": 15,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Spark_Lit_2_e9cb7623db.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/33"
  },
  {
    "id": 32,
    "title": "Dhwani' Social Outreach",
    "category": "Fests & Activities",
    "imageCount": 15,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/5_22dd41596c.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/32"
  },
  {
    "id": 31,
    "title": "Dhwani's - Nostalgia",
    "category": "Fests & Activities",
    "imageCount": 20,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Nostalgia_2_7affe8da7b.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/31"
  },
  {
    "id": 30,
    "title": "Dhwani's Kalakriti",
    "category": "Fests & Activities",
    "imageCount": 15,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Kalakriti_3_fea4fe570f.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/30"
  },
  {
    "id": 29,
    "title": "Dhwani's - Clay Modelling Workshop",
    "category": "Conferences & Conclaves",
    "imageCount": 19,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Clayrophyll_2_96bd0c0702.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/29"
  },
  {
    "id": 28,
    "title": "Dhwani' Rendezvous",
    "category": "Fests & Activities",
    "imageCount": 11,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/4_56004f4788.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/28"
  },
  {
    "id": 27,
    "title": "Dhwani - Rang De Rangoli Competition",
    "category": "Fests & Activities",
    "imageCount": 17,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Rang_De_2_867aadeb30.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/27"
  },
  {
    "id": 26,
    "title": "Dhwani' Floral Rangoli",
    "category": "Fests & Activities",
    "imageCount": 16,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/13_639ead6047.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/26"
  },
  {
    "id": 25,
    "title": "Dhwani' Crescendo",
    "category": "Fests & Activities",
    "imageCount": 16,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/8_6e834b6b3a.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/25"
  },
  {
    "id": 24,
    "title": "Dhwani' Couture Show",
    "category": "Fests & Activities",
    "imageCount": 17,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/13_9985f78f1c.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/24"
  },
  {
    "id": 23,
    "title": "Dhwani' Compart Disc",
    "category": "Fests & Activities",
    "imageCount": 17,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/12_9eedcb7eca.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/23"
  },
  {
    "id": 22,
    "title": "AISP 2020",
    "category": "Conferences & Conclaves",
    "imageCount": 19,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/aisp1_2_6027fc0d07.avif",
    "date": "2024-05-18",
    "vitapUrl": "https://vitap.ac.in/gallery/22"
  },
  {
    "id": 20,
    "title": "4th International Karate Championship 2020",
    "category": "Fests & Activities",
    "imageCount": 8,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/4_I_Karate_1_29ed75c456.avif",
    "date": "2024-04-02",
    "vitapUrl": "https://vitap.ac.in/gallery/20"
  },
  {
    "id": 19,
    "title": "Campus Info",
    "category": "Campus Life",
    "imageCount": 12,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/sac_side_view_2f53cf8a5e.avif",
    "date": "2024-04-02",
    "vitapUrl": "https://vitap.ac.in/gallery/19"
  },
  {
    "id": 18,
    "title": "Hostels",
    "category": "Campus Life",
    "imageCount": 7,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/MH_4_45ce2eb7c7.avif",
    "date": "2024-04-02",
    "vitapUrl": "https://vitap.ac.in/gallery/18"
  },
  {
    "id": 17,
    "title": "International Yoga Day 2021",
    "category": "Celebrations",
    "imageCount": 7,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/Y1_38c236684c.avif",
    "date": "2024-04-02",
    "vitapUrl": "https://vitap.ac.in/gallery/17"
  },
  {
    "id": 16,
    "title": "VIT-AP School of Social Sciences and Humanities (VISH)",
    "category": "Campus Life",
    "imageCount": 25,
    "coverUrl": "https://vitap-backend.s3.ap-south-1.amazonaws.com/VISH_GALLERY_1_5db4d880a2.avif",
    "date": "2024-04-02",
    "vitapUrl": "https://vitap.ac.in/gallery/16"
  }
];
