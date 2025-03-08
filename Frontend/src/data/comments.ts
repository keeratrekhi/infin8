
export interface CommentType {
  id: string;
  eventId: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
}

export const commentsData: CommentType[] = [
  {
    id: "comment-1",
    eventId: "1",
    user: {
      id: "user-1",
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    content: "Looking forward to this event! Will there be opportunities for networking with tech recruiters?",
    date: "2023-11-15T14:23:01Z"
  },
  {
    id: "comment-2",
    eventId: "1",
    user: {
      id: "user-2",
      name: "Jamie Smith",
      avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
    },
    content: "I attended last year and it was amazing! The keynote speakers were really insightful, and I made some great industry connections.",
    date: "2023-11-16T08:45:22Z"
  },
  {
    id: "comment-3",
    eventId: "1",
    user: {
      id: "user-3",
      name: "Morgan Lee",
      avatar: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
    },
    content: "Does anyone know if there will be sessions specifically on machine learning this year?",
    date: "2023-11-18T19:12:05Z"
  },
  {
    id: "comment-4",
    eventId: "2",
    user: {
      id: "user-4",
      name: "Taylor Williams",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    content: "I'm bringing my whole crew to this festival! Anyone know which bands are headlining on Saturday?",
    date: "2023-06-20T10:33:45Z"
  },
  {
    id: "comment-5",
    eventId: "2",
    user: {
      id: "user-5",
      name: "Casey Brown",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    content: "Really excited for this festival! Are there any recommendations for nearby accommodations?",
    date: "2023-06-22T16:05:12Z"
  }
];
