export interface ScheduleItem {
  id: string;
  type: 'ceremony' | 'speaker';
  title: string;
  speaker?: {
    name: string;
    designation: string;
    imageSrc: string;
  };
  startTime: string;
  endTime: string;
  duration: string;
  description?: string;
}

export const scheduleData: ScheduleItem[] = [
  {
    id: "inauguration",
    type: "ceremony",
    title: "Inauguration Ceremony",
    startTime: "10:30 AM",
    endTime: "11:00 AM",
    duration: "30 minutes",
    description: "Opening ceremony and welcome address for TEDx IEM Salt Lake"
  },
  {
    id: "jimmy-tangree",
    type: "speaker",
    title: "Jimmy Tangree",
    speaker: {
      name: "Jimmy Tangree",
      designation: "Head, 91.9 Friends FM",
      imageSrc: "/images/CoreTeam/jimmy.jpg"
    },
    startTime: "11:00 AM",
    endTime: "11:18 AM",
    duration: "18 minutes"
  },
  {
    id: "ankush-hazra",
    type: "speaker",
    title: "Ankush Hazra",
    speaker: {
      name: "Ankush Hazra",
      designation: "Actor",
      imageSrc: "/images/CoreTeam/ankush.jpg"
    },
    startTime: "11:23 AM",
    endTime: "11:41 AM",
    duration: "18 minutes"
  },
  {
    id: "debashish-bhattacharya",
    type: "speaker",
    title: "Debashish Bhattacharya",
    speaker: {
      name: "Debashish Bhattacharya",
      designation: "Indian classical slide guitarist",
      imageSrc: "/images/CoreTeam/debashish.jpg"
    },
    startTime: "11:46 AM",
    endTime: "12:04 PM",
    duration: "18 minutes"
  },
  {
    id: "ashoke-viswanathan",
    type: "speaker",
    title: "Ashoke Viswanathan",
    speaker: {
      name: "Ashoke Viswanathan",
      designation: "Filmmaker",
      imageSrc: "/images/CoreTeam/ashoke.jpg"
    },
    startTime: "12:09 PM",
    endTime: "12:27 PM",
    duration: "18 minutes"
  },
  {
    id: "ritabhari-chakraborty",
    type: "speaker",
    title: "Ritabhari Chakraborty",
    speaker: {
      name: "Ritabhari Chakraborty",
      designation: "Actress",
      imageSrc: "/images/CoreTeam/ritabhari.jpg"
    },
    startTime: "12:32 PM",
    endTime: "12:50 PM",
    duration: "18 minutes"
  },
  {
    id: "rwitobroto-mukherjee",
    type: "speaker",
    title: "Rwitobroto Mukherjee",
    speaker: {
      name: "Rwitobroto Mukherjee",
      designation: "Actor",
      imageSrc: "/images/CoreTeam/rwitobroto.jpg"
    },
    startTime: "12:55 PM",
    endTime: "1:13 PM",
    duration: "18 minutes"
  }
];

export const eventInfo = {
  eventName: "TEDx IEM Salt Lake",
  date: "22 August 2025",
  venue: "IEM Salt Lake Campus",
  theme: "Ideas Worth Spreading"
};
