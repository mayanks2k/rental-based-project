type FAQItem = {
  question: string;
  answer: string;
  listItem?: { tagline?: string; summary?: string }[];
};
const subscriberFAQItems: FAQItem[] = [
  {
    question: "Not relevant at this stage?",
    answer:
      "Unfortunately, no. Drivers are assigned based on availability and location.",
  },
  {
    question: "How can I share my ride details?",
    answer:
      "Once a driver is assigned, tap the 'share' icon on the map screen to share your ride details with others.",
  },
  {
    question: "How can I share my carbon savings?",
    answer:
      "Go to the carbon icon on the homepage and click 'share' to show off your eco-friendly impact!",
  },
  {
    question: "Does car offer referral programs?",
    answer: "No, we don't currently offer referral programs for riders.",
  },
  {
    question: "What if no slots are available?",
    answer:
      "We're constantly expanding and working to increase availability. You can book directly through the app without needing our support team.",
  },
  {
    question: "How much space is in an car car?",
    answer:
      "Sedan car trunks are 255L, while premium SUVs offer a spacious 470L - perfect for luggage! Plus, no CNG tanks to limit your space.",
  },
];
const riderFAQItems: FAQItem[] = [
  {
    question: "Can I get the same driver every time?",
    answer:
      "Unfortunately, no. Drivers are assigned based on availability and location.",
  },
  {
    question: "How can I share my ride details?",
    answer:
      "Once a driver is assigned, tap the 'share' icon on the map screen to share your ride details with others.",
  },
  {
    question: "How can I share my carbon savings?",
    answer:
      "Go to the carbon icon on the homepage and click 'share' to show off your eco-friendly impact!",
  },
  {
    question: "Does car offer referral programs?",
    answer: "No, we don't currently offer referral programs for riders.",
  },
  {
    question: "What if no slots are available?",
    answer:
      "We're constantly expanding and working to increase availability. You can book directly through the app without needing our support team.",
  },
  {
    question: "How much space is in an car car?",
    answer:
      "Sedan car trunks are 255L, while premium SUVs offer a spacious 470L - perfect for luggage! Plus, no CNG tanks to limit your space.",
  },
];
const driverFAQItems: FAQItem[] = [
  {
    question: "Who can become a Driver-Partner?",
    answer:
      "Anyone 25 or older with a valid driver's license and the ability to drive a car can join!",
  },
  {
    question: "How do I sign up?",
    answer: "",
    listItem: [
      { summary: "Fill out the easy online form above." },
      {
        summary:
          "Visit one of our HUBs (registration centers) with your documents.",
      },
    ],
  },

  {
    question: "How will I get paid?",
    answer:
      "We offer convenient weekly payouts directly to your bank account. Check our benefits section for more details!",
  },
  {
    question: "Do I need my own car?",
    answer:
      "No! car provides electric vehicles on a lease model. Simply register and start driving.",
  },
  {
    question: "What vehicles will I drive?",
    answer:
      "car is eco-friendly! You'll drive electric vehicles with automatic transmission for a smoother experience.",
  },
];
const ChargeRevolutionFAQItems: FAQItem[] = [
  {
    question: "Can I easily find an car Charge station?",
    answer:
      "Absolutely! We have a large network of stations situated in key locations for your convenience. Plus, our app shows you which stations are available in real-time, so you can plan your charging stops and avoid any waiting.",
  },
  {
    question: "Is paying for charging safe with car Charge?",
    answer:
      " Your security is our priority. We use top-notch encryption technology for payment gateways and offer a variety of secure payment methods. This ensures a smooth and safe transaction process, giving you peace of mind about your financial information.",
  },
  {
    question:
      " Are there any new features coming to improve charging experiences?",
    answer:
      "We're always innovating! Keep an eye out for upcoming features like predicting station availability, suggesting smarter charging routes, and even potentially linking up with smart city projects. These advancements are all designed to make your electric vehicle experience even more seamless and eco-friendly.",
  },
];
const ForBusinessFAQItems: FAQItem[] = [
  {
    question: "What are the benefits of an car for Business account?",
    answer:
      "car for Business offers a range of advantages over a standard user account. These include:",
    listItem: [
      {
        tagline: "Dedicated Management Dashboard:",
        summary:
          " Easily onboard, manage, and track your employees' ride activity.",
      },
      {
        tagline: "Centralized Ride Control:",
        summary: "Create, modify, and monitor all your business trips.",
      },
      {
        tagline: "Detailed Reporting:",
        summary:
          "Gain valuable insights with comprehensive monthly ride and payment reports.",
      },
      {
        tagline: "Streamlined Payments:",
        summary:
          " Simplify expense management with secure payment options and electronic invoicing. Additionally, our secure API integrations allow for end-to-end encrypted payment processing.",
      },
    ],
  },
  {
    question: "Does car for Business provide carbon offset certificates?",
    answer:
      "Absolutely! You can download monthly and lifetime CO2 savings certificates directly from your car for Business dashboard. These reports demonstrate your company's commitment to environmental sustainability.",
  },

  {
    question: "Who is responsible for maintaining the fleet and drivers?",
    answer:
      "car takes care of all fleet maintenance, ensuring the vehicles are reliable and in top condition. Our driver-partners are also car  employees, guaranteeing consistent service and professionalism.",
  },
  {
    question:
      "What types of electric vehicles are available in the car and what is their range?",
    answer:
      "We offer a variety of electric vehicles to suit your needs, including:",
    listItem: [
      { summary: "Tata Tigor EV (estimated range of 250 kilometers)" },
      { summary: "MG ZS EV (estimated range of 350 kilometers)" },
      { summary: "BYD e6 EV (estimated range of 400 kilometers)" },
    ],
  },
  {
    question: "Do car for Business users get priority booking access?",
    answer:
      "Yes! As a valued car for Business client, you enjoy preferential slot availability, ensuring your team's rides are easily booked.",
  },
];
const GreenFAQItems: FAQItem[] = [
  {
    question: "What is car Green ?",
    answer:
      "car Green fleet is a vehicle lease program. You, the lessor, purchase electric vehicles (EVs) and lease them to car , the lessee. In return, you receive fixed monthly lease payments throughout the lease term. Importantly, you retain ownership of the vehicles.",
  },
  {
    question:
      "Can I participate in car Green fleet as an individual or through my company?",
    answer:
      "car Green fleet welcomes both individual and corporate participation. You can lease EVs to us regardless of whether you operate as a sole proprietor or a larger company.",
  },
  {
    question: "How long is the lease term? When will I receive payments?",
    answer:
      "The car Green fleet program offers a 4-year investment period. You will receive fixed monthly lease payments delivered directly to your chosen payment method at the beginning of each month throughout the lease term.",
  },
  {
    question: "How will I receive my lease payments? How can I track them?",
    answer:
      "car offers several convenient payment methods for your lease payments, including escrow, eNACH, and bank account transfer. You will be responsible for providing the necessary information and enabling your preferred payment method. Your investment details, including lease payments, will be accessible through a dedicated car  Green  portal. Additionally, you will receive monthly reports summarizing all investment-related information via email.",
  },
];
export const BatteryFAQItems: FAQItem[] = [
  {
    question: "How should I park my EV for long durations?",
    answer:
      "Avoid parking your vehicle with below 20% SoC continuously for two weeks (<14 days). Ideally, park with 40%-60% SoC and disconnect the Aux battery's negative terminal for periods longer than 14 days.",
  },
  {
    question:
      "What should I do before using my vehicle after a long resting period?",
    answer: "Charge the vehicle to 100% using Slow/AC Charging before use.",
  },
  {
    question:
      "How can I prevent the low voltage battery from discharging during the resting period?",
    answer:
      "Periodically (weekly), switch on the remote air conditioning for 20-30 minutes to wake up both the high voltage and low voltage systems. Alternatively, disconnect the negative terminal of the low voltage battery to put the vehicle into complete sleep mode.",
  },
  {
    question: "Can I use a high-pressure washer to clean my EV?",
    answer:
      "No, do not direct high-pressure washer fluid/water jets (pressure above 0.5 bar) at electrical devices and connectors to prevent malfunctions or failures.",
  },
  {
    question: "Can I drive through water?",
    answer:
      "Yes, but only if the water is not deeper than 210mm (Tigor) or 300mm (Nexon) and at a creep speed.",
  },
  {
    question: "What should I do if my car gets submerged in water?",
    answer:
      "Switch off the ignition, evacuate the car, and call Roadside Assistance at 18002098282.",
  },
  {
    question: "Where should I get my EV serviced or repaired?",
    answer: "Always at a TML authorized EV workshop.",
  },
  {
    question: "What should I check before starting a journey?",
    answer:
      "Check the SoC level and ensure the car is adequately charged. You can also check the SoC level on the mobile app.",
  },
  {
    question:
      "What should I avoid doing with the remote AC command via the mobile app?",
    answer:
      "Do not execute the remote AC command during the charge initiation process. Switch off the remote AC using the Zconnect app before unlocking the vehicle.",
  },
  {
    question: "How often should I charge my vehicle to 100%?",
    answer:
      "It is recommended to charge the vehicle to 100% every time it is being charged.",
  },
  {
    question: "How should I manage slow and fast charging?",
    answer:
      "Maximize the use of slow/AC charging. After a maximum of 4 continuous fast charging cycles, use slow/AC charging and charge to 100% SoC. At least once a month or after every 4 fast charging cycles, perform one slow/AC charging till 100% SoC for calibration and cell balancing.",
  },
  {
    question: "What should I avoid while charging the vehicle?",
    answer:
      "Avoid charging under heavy rain or thunderstorms. Avoid driving the vehicle below 10% SoC. Do not disengage or play around with the park brake while in fast charging condition. Do not use a damaged charging station, plug point, or charging port. Ensure the charging gun is stored safely and not exposed to rain or wet conditions. Change of vehicle state (Ignition OFF to ON or vice-versa) should be avoided while charging.",
  },
  {
    question:
      "What precautions should I take with the charging gun and home charging box?",
    answer:
      "After switching off the charger, wait at least 5 seconds before touching and pulling out the gun. If reinserting the charging gun, wait at least 10 seconds after removal. Once normal/fast charging is completed, wait preferably 90 seconds (actual 30 sec) before starting the vehicle. Overcurrent and leakage current protections are provided in the home charging box and charging gun. The RCBO should always be in the ON state with no error LEDs blinking on the charging gun.",
  },
  {
    question: "Should I lock the home charging box?",
    answer:
      "Yes, it is recommended to lock the box during overnight charging or when not in use to avoid misuse.",
  },
  {
    question: "How can I drive efficiently to maximize my EV’s range?",
    answer:
      "Drive smoothly without rapid changes in accelerator pedal inputs. Slow down and maintain a speed between 40-60 kmph in the city and 60-80 kmph on highways. Maximize regenerative braking by lifting your foot off the accelerator pedal to slow down. Go easy on heating and cooling; set temperatures to a comfortable 24°C - 26°C with Auto mode and Econ activated. Travel light by not adding unnecessary accessories or carrying dead weight. Follow the recommended service schedule and maintain fluid levels within tolerance limits. Use drive/eco mode and maintain recommended tyre pressure for optimal range.",
  },
  {
    question: "Can you provide examples of predictive driving?",
    answer:
      "Coast to less than 10 kmph before stopping at a red signal. Keep a safe distance from the vehicle in front to minimize brake usage. Release the accelerator early when approaching a speed breaker to coast over it without needing to brake.",
  },
  {
    question: "Is safety a priority over range maximization?",
    answer:
      "Yes, always prioritize safety over range maximization. Regenerative opportunities depend on the driver’s ability to extract energy from the vehicle, but safety should never be compromised.",
  },
];

export const faqsData = {
  Subscriber: subscriberFAQItems,
  Rider: riderFAQItems,
  Driver: driverFAQItems,
  "car Charge Revolution": ChargeRevolutionFAQItems,
  "car for Business": ForBusinessFAQItems,
  "car Green": GreenFAQItems,
  "Battery Management": BatteryFAQItems,
} as const;

export type FAQCategory = keyof typeof faqsData;
