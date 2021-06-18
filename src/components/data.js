export let data = {
    computer_science: {
    //     nodes: [
    //         {id: "Microsoft"}, {id: "Amazon"}, {id: "HTC"}, {id: "Samsung"}, {id: "Apple"}, {id: "Motorola"},
    //         {id: "Nokia"}, {id: "Kodak"}, {id: "Barnes & Noble"}, {id: "Foxconn"}, {id: "Oracle"}, {id: "Google"},
    //         {id: "Inventec"}, {id: "LG"}, {id: "RIM"}, {id: "Sony"}, {id: "Qualcomm"}, {id: "Huawei"}, {id: "ZTE"},
    //         {id: "Ericsson"}, 
    //         {id: "Introduction to Computer Programming"},
    //         { id: "Discrete Mathematics" },
    //   { id: "Probability & Statistics" },
    //   { id: "Computer Organization and Systems" },
    //   { id: "Advanced Programming" },
    //   { id: "Design and Analysis of Algorithms" },
    //   { id: "Operating Systems" },
    //   { id: "Introduction to Machine Learning" },
    //   { id: "Programming Language Design and Implementation" },
    //   { id: "Computer Networks" },
    //   { id: "Computer Security and Privacy" },
    //   { id: "Theory of Computation" },
    //   { id: "Advanced Algorithms" },
    //   { id: "Advanced Machine Learning" },
    //   { id: "New Geography of the Information Age" },
    //   { id: "Blockchain & Cryptocurrencies" },

    //     ],
    
    //     links: [
    //         {source: "Samsung", target: "Apple", type: "suit"},
    //         {source: "Motorola", target: "Apple", type: "suit"},
    //         {source: "Nokia", target: "Apple", type: "resolved"},
    //         {source: "HTC", target: "Apple", type: "suit"},
    //         {source: "Kodak", target: "Apple", type: "suit"},
    //         {source: "Microsoft", target: "Barnes & Noble", type: "suit"},
    //         {source: "Microsoft", target: "Foxconn", type: "suit"},
    //         {source: "Oracle", target: "Google", type: "suit"},
    //         {source: "Apple", target: "HTC", type: "suit"},
    //         {source: "Microsoft", target: "Inventec", type: "suit"},
    //         {source: "Samsung", target: "Kodak", type: "resolved"},
    //         {source: "LG", target: "Kodak", type: "resolved"},
    //         {source: "RIM", target: "Kodak", type: "suit"},
    //         {source: "Sony", target: "LG", type: "suit"},
    //         {source: "Kodak", target: "LG", type: "resolved"},
    //         {source: "Apple", target: "Nokia", type: "resolved"},
    //         {source: "Qualcomm", target: "Nokia", type: "resolved"},
    //         {source: "Apple", target: "Motorola", type: "suit"},
    //         {source: "Microsoft", target: "Motorola", type: "suit"},
    //         {source: "Motorola", target: "Microsoft", type: "suit"},
    //         {source: "Huawei", target: "ZTE", type: "suit"},
    //         {source: "Ericsson", target: "ZTE", type: "suit"},
    //         {source: "Kodak", target: "Samsung", type: "resolved"},
    //         {source: "Apple", target: "Samsung", type: "suit"},
    //         {source: "Kodak", target: "RIM", type: "suit"},
    //         {source: "Nokia", target: "Qualcomm", type: "suit"},
    //         {source: "Introduction to Computer Programming", target: "Probability & Statistics",type: "core"},
    //     ]


            nodes: [
      {id: "Introduction to Computer Programming"},
      { id: "Discrete Mathematics" },
      { id: "Probability & Statistics" },
      { id: "Computer Organization and Systems" },
      { id: "Advanced Programming" },
      { id: "Design and Analysis of Algorithms" },
      { id: "Operating Systems" },
      { id: "Introduction to Machine Learning" },
      { id: "Programming Language Design and Implementation" },
      { id: "Computer Networks" },
      { id: "Computer Security and Privacy" },
      { id: "Theory of Computation" },
      { id: "Advanced Algorithms" },
      { id: "Advanced Machine Learning" },
      { id: "New Geography of the Information Age" },
      { id: "Blockchain & Cryptocurrencies" },
    ],

    links: [
      {
        source: "Introduction to Computer Programming",
        target: "Probability & Statistics",
        type: "core",
      },
      {
        source: "Discrete Mathematics",
        target: "Probability & Statistics",
        type: "",
      },
      {
        source: "Introduction to Computer Programming",
        target: "Computer Organization and Systems",
        type: "",
      },
      {
        source: "Introduction to Computer Programming",
        target: "Advanced Programming",
        type: "",
      },
      {
        source: "Introduction to Computer Programming",
        target: "Design and Analysis of Algorithms",
        type: "",
      },
      {
        source: "Introduction to Computer Programming",
        target: "Operating Systems",
        type: "",
      },
      {
        source: "Computer Organization and Systems",
        target: "Operating Systems",
        type: "",
      },
      {
        source: "Introduction to Computer Programming",
        target: "Introduction to Machine Learning",
        type: "",
      },
      {
        source: "Introduction to Computer Programming",
        target: "Programming Language Design and Implementation",
        type: "",
      },
      {
        source: "Operating Systems",
        target: "Programming Language Design and Implementation",
        type: "",
      },
      {
        source: "Computer Organization and Systems",
        target: "Programming Language Design and Implementation",
        type: "",
      },
      {
        source: "Introduction to Computer Programming",
        target: "Computer Networks",
        type: "",
      },
      { source: "Discrete Mathematics", target: "Computer Networks", type: "" },
      {
        source: "Computer Organization and Systems",
        target: "Computer Networks",
        type: "",
      },
      {
        source: "Probability & Statistics",
        target: "Computer Networks",
        type: "",
      },
      {
        source: "Introduction to Computer Programming",
        target: "Computer Security and Privacy",
        type: "",
      },
      {
        source: "Discrete Mathematics",
        target: "Computer Security and Privacy",
        type: "",
      },
      {
        source: "Probability & Statistics",
        target: "Computer Security and Privacy",
        type: "",
      },
      {
        source: "Computer Networks",
        target: "Computer Security and Privacy",
        type: "",
      },
      {
        source: "Introduction to Computer Programming",
        target: "Theory of Computation",
        type: "",
      },
      {
        source: "Discrete Mathematics",
        target: "Theory of Computation",
        type: "",
      },
      {
        source: "Probability & Statistics",
        target: "Theory of Computation",
        type: "",
      },
      {
        source: "Design and Analysis of Algorithms",
        target: "Theory of Computation",
        type: "",
      },
      {
        source: "Introduction to Computer Programming",
        target: "Advanced Algorithms",
        type: "",
      },
      {
        source: "Design and Analysis of Algorithms",
        target: "Advanced Algorithms",
        type: "",
      },
      {
        source: "Introduction to Computer Programming",
        target: "Advanced Machine Learning",
        type: "",
      },
      {
        source: "Introduction to Machine Learning",
        target: "Advanced Machine Learning",
        type: "",
      },
      {
        source: "Introduction to Computer Programming",
        target: "Blockchain & Cryptocurrencies",
        type: "",
      },
      {
        source: "Advanced Programming",
        target: "Blockchain & Cryptocurrencies",
        type: "",
      },
      {
        source: "Computer Organization and Systems",
        target: "Blockchain & Cryptocurrencies",
        type: "",
      },
      {
        source: "Computer Security and Privacy",
        target: "Blockchain & Cryptocurrencies",
        type: "",
      }
    ]





    }
    
}
