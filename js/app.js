/**
 * Shared utilities and data loading for exam prep app
 */

// Embedded exam data (works without a server)
const EXAM_DATA = {
  'journeyman-electrical': {
    "exam": "Journeyman Electrician",
    "version": "1.0",
    "passingScore": 70,
    "timeLimit": 3600,
    "questions": [
      {
        "id": "je-001",
        "question": "What is the minimum burial depth for direct burial UF cable without additional protection?",
        "options": ["6 inches", "12 inches", "18 inches", "24 inches"],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Table 300.5",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 300.5, direct burial cables must be buried at least 24 inches when installed without additional protection such as concrete or RMC."
      },
      {
        "id": "je-002",
        "question": "What is the maximum number of #12 AWG THHN conductors allowed in a 1/2\" EMT conduit?",
        "options": ["5", "7", "9", "12"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Chapter 9, Table C1",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "According to NEC Chapter 9, Table C1, a 1/2\" EMT can contain a maximum of 9 #12 AWG THHN conductors based on 40% fill capacity."
      },
      {
        "id": "je-003",
        "question": "What is the ampacity of a #6 AWG copper conductor with THWN insulation at 75°C?",
        "options": ["40 amps", "55 amps", "65 amps", "75 amps"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 310.16, #6 AWG copper with THWN insulation (75°C column) has an ampacity of 65 amps."
      },
      {
        "id": "je-004",
        "question": "What is the minimum working space depth in front of a 480V electrical panel?",
        "options": ["2 feet", "3 feet", "3.5 feet", "4 feet"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 110.26(A)(1)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 110.26(A)(1), Table 110.26(A)(1), for 301-600V (Condition 1), the minimum depth of clear working space is 3.5 feet (1.0m)."
      },
      {
        "id": "je-005",
        "question": "What color must the grounded conductor (neutral) be?",
        "options": ["Green", "White or gray", "Red", "Any color with white tape"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 200.6",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 200.6, the grounded conductor must be identified by white or gray color, or three continuous white or gray stripes on other than green insulation."
      },
      {
        "id": "je-006",
        "question": "What is the maximum voltage drop recommended for branch circuits?",
        "options": ["2%", "3%", "5%", "8%"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 210.19(A) Informational Note",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 210.19(A) Informational Note No. 4, branch circuit conductors should be sized to prevent voltage drop exceeding 3% at the farthest outlet."
      },
      {
        "id": "je-007",
        "question": "A 120V circuit has a load of 1800 watts. What is the current draw?",
        "options": ["12 amps", "15 amps", "18 amps", "20 amps"],
        "correct": 1,
        "source": {
          "name": "Ohm's Law / Power Formula",
          "url": ""
        },
        "explanation": "Using P = V × I, we get I = P/V = 1800W / 120V = 15 amps."
      },
      {
        "id": "je-008",
        "question": "What is the minimum height for receptacles in a dwelling unit?",
        "options": ["No minimum", "6 inches", "12 inches", "15 inches"],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 210.52",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "The NEC does not specify a minimum mounting height for receptacles in dwelling units. However, local codes may have requirements, and ADA guidelines suggest 15 inches minimum for accessibility."
      },
      {
        "id": "je-009",
        "question": "What is the maximum length of a flexible cord used as a fixed wiring method?",
        "options": ["Not permitted", "6 feet", "10 feet", "25 feet"],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 400.12",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 400.12, flexible cords shall not be used as a substitute for fixed wiring of a structure. They are only permitted for specific uses listed in 400.10."
      },
      {
        "id": "je-010",
        "question": "What size ground wire is required for a 60-amp circuit?",
        "options": ["#14 AWG", "#12 AWG", "#10 AWG", "#8 AWG"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 250.122",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 250.122, a circuit protected by a 60-amp overcurrent device requires a minimum #10 AWG copper equipment grounding conductor."
      },
      {
        "id": "je-011",
        "question": "What is the maximum distance between receptacle outlets along a wall in a dwelling unit?",
        "options": ["6 feet", "8 feet", "10 feet", "12 feet"],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 210.52(A)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 210.52(A), receptacles must be installed so that no point along the floor line is more than 6 feet from an outlet, meaning outlets can be up to 12 feet apart."
      },
      {
        "id": "je-012",
        "question": "What is the standard voltage for a single-phase, three-wire residential service?",
        "options": ["120V", "208V", "240V", "120/240V"],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 220",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "A standard single-phase, three-wire residential service provides 120/240V - 120V between each hot leg and neutral, and 240V between the two hot legs."
      },
      {
        "id": "je-013",
        "question": "GFCI protection is required for 125V, 15 and 20-amp receptacles in which location?",
        "options": ["Bedrooms", "Living rooms", "Kitchens serving countertop surfaces", "Hallways"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.8(A)(6)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 210.8(A)(6), GFCI protection is required for all 125V, 15 and 20-amp receptacles in kitchens that serve countertop surfaces."
      },
      {
        "id": "je-014",
        "question": "What is the total resistance of three 30-ohm resistors connected in parallel?",
        "options": ["10 ohms", "30 ohms", "60 ohms", "90 ohms"],
        "correct": 0,
        "source": {
          "name": "Electrical Theory - Parallel Circuits",
          "url": ""
        },
        "explanation": "For parallel resistors: 1/Rt = 1/R1 + 1/R2 + 1/R3 = 1/30 + 1/30 + 1/30 = 3/30 = 1/10, so Rt = 10 ohms."
      },
      {
        "id": "je-015",
        "question": "What type of circuit breaker is required for a spa or hot tub?",
        "options": ["Standard breaker", "GFCI breaker", "AFCI breaker", "Dual function AFCI/GFCI breaker"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 680.44",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 680.44, all outlets supplying a spa or hot tub must be protected by a Class A GFCI."
      },
      {
        "id": "je-016",
        "question": "What is the ampacity of #10 AWG copper THWN at 75°C?",
        "options": ["25 amps", "30 amps", "35 amps", "40 amps"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 310.16, #10 AWG copper with 75°C rated insulation (THWN) has an ampacity of 35 amps."
      },
      {
        "id": "je-017",
        "question": "What is the minimum size copper grounding electrode conductor for a 200-amp service?",
        "options": ["#8 AWG", "#6 AWG", "#4 AWG", "#2 AWG"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 250.66",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 250.66, for service entrance conductors up to 2/0 AWG copper (typically used for 200A service), the minimum copper grounding electrode conductor is #4 AWG."
      },
      {
        "id": "je-018",
        "question": "AFCI protection is required in which area of a dwelling unit?",
        "options": ["Bathrooms", "Garages", "Bedrooms", "Kitchens"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.12(A)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 210.12(A), AFCI protection is required for 120V, 15 and 20-amp branch circuits supplying outlets in bedrooms, living rooms, dining rooms, and other dwelling areas."
      },
      {
        "id": "je-019",
        "question": "What is the maximum overcurrent protection for #14 AWG copper conductors?",
        "options": ["10 amps", "15 amps", "20 amps", "25 amps"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 240.4(D)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 240.4(D), #14 AWG copper conductors shall be protected at not more than 15 amps."
      },
      {
        "id": "je-020",
        "question": "A 4-inch square metal box is how many cubic inches?",
        "options": ["18 cu in", "21 cu in", "30.3 cu in", "42 cu in"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 314.16(A)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 314.16(A), a 4-inch square metal box with 1-1/2 inch depth has a volume of 21 cubic inches."
      },
      {
        "id": "je-021",
        "question": "What is the volume allowance for each #12 AWG conductor in box fill calculations?",
        "options": ["1.75 cu in", "2.00 cu in", "2.25 cu in", "2.50 cu in"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 314.16(B)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 314.16(B), each #12 AWG conductor requires 2.25 cubic inches of box volume."
      },
      {
        "id": "je-022",
        "question": "What is the demand factor for the first 10 kW of household electric range load?",
        "options": ["50%", "70%", "80%", "100%"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 220.55",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 220.55 Column C, a single household range up to 12 kW uses a maximum demand of 8 kW (approximately 80% of nameplate)."
      },
      {
        "id": "je-023",
        "question": "What is the minimum service size for a single-family dwelling?",
        "options": ["60 amps", "100 amps", "150 amps", "200 amps"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 230.79(C)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 230.79(C), the minimum service for a single-family dwelling is 100 amps, 3-wire."
      },
      {
        "id": "je-024",
        "question": "What is the general lighting load in VA per square foot for dwelling units?",
        "options": ["1 VA", "2 VA", "3 VA", "5 VA"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 220.12",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 220.12, dwelling units require 3 VA per square foot for general lighting load calculations."
      },
      {
        "id": "je-025",
        "question": "What is the power factor of a purely resistive circuit?",
        "options": ["0", "0.5", "0.8", "1.0"],
        "correct": 3,
        "source": {
          "name": "Electrical Theory - Power Factor",
          "url": ""
        },
        "explanation": "In a purely resistive circuit, voltage and current are in phase, resulting in a power factor of 1.0 (unity)."
      },
      {
        "id": "je-026",
        "question": "A motor with a 40-amp full load current requires what minimum branch circuit conductor ampacity?",
        "options": ["40 amps", "45 amps", "50 amps", "60 amps"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 430.22",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 430.22, motor branch circuit conductors must have an ampacity of not less than 125% of the motor FLC. 40A × 1.25 = 50 amps."
      },
      {
        "id": "je-027",
        "question": "What is the maximum distance from a bathroom sink to a required receptacle?",
        "options": ["20 inches", "3 feet", "6 feet", "No maximum specified"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 210.52(D)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 210.52(D), at least one receptacle outlet shall be installed within 3 feet of the outside edge of each bathroom sink basin."
      },
      {
        "id": "je-028",
        "question": "What color identifies an equipment grounding conductor?",
        "options": ["White", "Gray", "Green or bare", "Blue"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 250.119",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 250.119, equipment grounding conductors shall be identified by green color, green with yellow stripes, or bare conductor."
      },
      {
        "id": "je-029",
        "question": "What is the maximum height for a circuit breaker operating handle in a panelboard?",
        "options": ["5 feet 6 inches", "6 feet", "6 feet 7 inches", "7 feet"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 240.24(A)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 240.24(A), overcurrent devices shall be readily accessible and installed so the center of the grip of the operating handle is not more than 6 feet 7 inches above the floor."
      },
      {
        "id": "je-030",
        "question": "How many small appliance circuits are required in a dwelling kitchen?",
        "options": ["1", "2", "3", "4"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 210.52(B)(1)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 210.52(B)(1), a minimum of two 20-amp small appliance branch circuits are required to serve receptacle outlets in the kitchen, pantry, dining room, and breakfast room."
      },
      {
        "id": "je-031",
        "question": "What is the resistance of a circuit with 120V applied and 10A of current flow?",
        "options": ["10 ohms", "12 ohms", "120 ohms", "1200 ohms"],
        "correct": 1,
        "source": {
          "name": "Ohm's Law",
          "url": ""
        },
        "explanation": "Using Ohm's Law: R = V/I = 120V / 10A = 12 ohms."
      },
      {
        "id": "je-032",
        "question": "What is the minimum headroom required in working spaces around electrical equipment?",
        "options": ["6 feet", "6 feet 3 inches", "6 feet 6 inches", "7 feet"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 110.26(A)(3)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 110.26(A)(3), the minimum headroom of working spaces about service equipment, switchboards, panelboards, or motor control centers shall be 6 feet 6 inches."
      },
      {
        "id": "je-033",
        "question": "EMT is permitted in all of the following EXCEPT:",
        "options": ["Dry locations", "Wet locations when listed", "Direct burial", "Concealed spaces"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 358.10",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 358.10 and 358.12, EMT shall not be used for direct earth burial unless listed for the purpose. Standard EMT is not suitable for direct burial."
      },
      {
        "id": "je-034",
        "question": "What is the maximum number of 90-degree bends permitted between pull points in a conduit run?",
        "options": ["2 (180 degrees)", "3 (270 degrees)", "4 (360 degrees)", "No limit"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 358.26",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 358.26, there shall not be more than the equivalent of four quarter bends (360 degrees total) between pull points."
      },
      {
        "id": "je-035",
        "question": "What is the minimum cover depth for RMC under a driveway?",
        "options": ["6 inches", "12 inches", "18 inches", "24 inches"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 300.5",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 300.5, rigid metal conduit requires a minimum burial depth of 6 inches under a one- or two-family dwelling driveway, and 18 inches in other vehicular traffic areas."
      },
      {
        "id": "je-036",
        "question": "A dwelling unit laundry circuit must be at least what amperage?",
        "options": ["15 amps", "20 amps", "30 amps", "40 amps"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 210.52(F)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 210.52(F), at least one 20-amp branch circuit shall be provided for the laundry area receptacle(s)."
      },
      {
        "id": "je-037",
        "question": "What is the demand factor for four or more fastened-in-place appliances in a dwelling?",
        "options": ["50%", "65%", "75%", "100%"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 220.53",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 220.53, where four or more fastened-in-place appliances (other than ranges, dryers, etc.) are served by the same feeder, a demand factor of 75% may be applied."
      },
      {
        "id": "je-038",
        "question": "What is the power consumed by a 240V, 20-amp resistive heating circuit?",
        "options": ["2400 watts", "4800 watts", "6000 watts", "9600 watts"],
        "correct": 1,
        "source": {
          "name": "Power Formula",
          "url": ""
        },
        "explanation": "P = V × I = 240V × 20A = 4800 watts."
      },
      {
        "id": "je-039",
        "question": "What is the minimum working space width in front of electrical equipment?",
        "options": ["24 inches", "30 inches or width of equipment", "36 inches", "42 inches"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 110.26(A)(2)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 110.26(A)(2), the width of the working space shall be the width of the equipment or 30 inches, whichever is greater."
      },
      {
        "id": "je-040",
        "question": "What is the maximum continuous load on a 20-amp circuit breaker?",
        "options": ["12 amps", "16 amps", "18 amps", "20 amps"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 210.20(A)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 210.20(A), a continuous load shall not exceed 80% of the branch circuit rating. 20A × 0.80 = 16 amps."
      },
      {
        "id": "je-041",
        "question": "What size equipment grounding conductor is required for a 40-amp circuit?",
        "options": ["#14 AWG", "#12 AWG", "#10 AWG", "#8 AWG"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 250.122",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 250.122, a circuit protected by a 40-amp overcurrent device requires a minimum #10 AWG copper equipment grounding conductor."
      },
      {
        "id": "je-042",
        "question": "What is the minimum size copper conductor for a 100-amp feeder?",
        "options": ["#4 AWG", "#3 AWG", "#2 AWG", "#1 AWG"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 310.16, #3 AWG copper THWN at 75°C has an ampacity of 100 amps."
      },
      {
        "id": "je-043",
        "question": "When are tamper-resistant receptacles required in dwelling units?",
        "options": ["Only in children's bedrooms", "Only in kitchens", "In all 15 and 20-amp, 125V outlets", "Only in bathrooms"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 406.12",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 406.12, all nonlocking-type 15 and 20-ampere, 125-volt receptacles in dwelling units shall be listed tamper-resistant receptacles."
      },
      {
        "id": "je-044",
        "question": "What is the frequency of standard AC power in the United States?",
        "options": ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
        "correct": 1,
        "source": {
          "name": "Electrical Theory - AC Fundamentals",
          "url": ""
        },
        "explanation": "Standard AC power in the United States operates at 60 Hz (cycles per second)."
      },
      {
        "id": "je-045",
        "question": "What is the maximum voltage drop recommended for feeders and branch circuits combined?",
        "options": ["3%", "5%", "8%", "10%"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 215.2(A)(4) Informational Note",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC informational notes, the maximum recommended voltage drop for feeders and branch circuits combined is 5% (3% for feeders + 3% for branch circuits, or any combination totaling 5%)."
      },
      {
        "id": "je-046",
        "question": "A 3-phase, 208V system has what voltage between any phase and neutral?",
        "options": ["110V", "120V", "208V", "240V"],
        "correct": 1,
        "source": {
          "name": "Electrical Theory - Three Phase Systems",
          "url": ""
        },
        "explanation": "In a 208Y/120V 3-phase system, the phase-to-neutral voltage is 120V, and the phase-to-phase voltage is 208V."
      },
      {
        "id": "je-047",
        "question": "What is the minimum disconnect distance from a pool's inside wall?",
        "options": ["5 feet", "6 feet", "10 feet", "No minimum"],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 680.12",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 680.12, the disconnecting means shall be located at least 5 feet from the inside walls of a pool."
      },
      {
        "id": "je-048",
        "question": "What is the maximum fuse size for a 10 HP, 230V, single-phase motor with dual-element time-delay fuses?",
        "options": ["50 amps", "62.5 amps", "70 amps", "87.5 amps"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 430.52, Table 430.248",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 430.248, a 10 HP, 230V single-phase motor has an FLC of 50A. Per Table 430.52, dual-element time-delay fuses are sized at 175% max. 50A × 1.75 = 87.5A, which rounds down to the next standard size of 70A."
      },
      {
        "id": "je-049",
        "question": "How many conductors does a 4-way switch have?",
        "options": ["2", "3", "4", "5"],
        "correct": 2,
        "source": {
          "name": "Electrical Theory - Switch Wiring",
          "url": ""
        },
        "explanation": "A 4-way switch has four terminals (conductors) - two traveler inputs and two traveler outputs. It is used between two 3-way switches to control a load from three or more locations."
      },
      {
        "id": "je-050",
        "question": "What is the minimum clearance of service drop conductors over a residential driveway?",
        "options": ["10 feet", "12 feet", "15 feet", "18 feet"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 230.24(B)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 230.24(B), service drop conductors must maintain a minimum clearance of 12 feet over residential driveways and commercial areas not subject to truck traffic."
      },
      {
        "id": "je-051",
        "question": "What is the ampacity of #8 AWG copper THWN at 75°C?",
        "options": ["40 amps", "45 amps", "50 amps", "55 amps"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 310.16, #8 AWG copper with 75°C rated insulation has an ampacity of 50 amps."
      },
      {
        "id": "je-052",
        "question": "Receptacles in a garage must be at what height from the floor?",
        "options": ["No requirement", "15 inches minimum", "18 inches minimum", "48 inches minimum"],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 210.52(G)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "The NEC does not specify a minimum mounting height for receptacles in garages. Local codes or ADA requirements may apply in certain situations."
      },
      {
        "id": "je-053",
        "question": "What is the minimum radius of a bend in 1-inch EMT?",
        "options": ["4 inches", "5 inches", "6 inches", "8 inches"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Chapter 9, Table 2",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Chapter 9, Table 2, the minimum radius for a one-shot bend in 1-inch EMT is 6 inches."
      },
      {
        "id": "je-054",
        "question": "What is the volume allowance for each #14 AWG conductor in box fill calculations?",
        "options": ["1.75 cu in", "2.00 cu in", "2.25 cu in", "2.50 cu in"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 314.16(B)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 314.16(B), each #14 AWG conductor requires 2.00 cubic inches of box volume."
      },
      {
        "id": "je-055",
        "question": "What is the total power in a balanced 3-phase circuit with 10A per phase at 208V?",
        "options": ["2080 watts", "3600 watts", "6240 watts", "7200 watts"],
        "correct": 1,
        "source": {
          "name": "Three-Phase Power Formula",
          "url": ""
        },
        "explanation": "For a balanced 3-phase load: P = √3 × V × I = 1.732 × 208V × 10A = 3,602 watts (approximately 3600 watts)."
      },
      {
        "id": "je-056",
        "question": "What is the maximum number of disconnects permitted for a service?",
        "options": ["2", "4", "6", "8"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 230.71(A)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 230.71(A), a maximum of six switches or circuit breakers may serve as the service disconnecting means."
      },
      {
        "id": "je-057",
        "question": "What is the maximum length of a cord for a garbage disposal?",
        "options": ["18 inches to 24 inches", "18 inches to 36 inches", "24 inches to 48 inches", "36 inches to 48 inches"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 422.16(B)(1)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 422.16(B)(1), a cord-connected garbage disposal shall have a cord between 18 inches and 36 inches in length."
      },
      {
        "id": "je-058",
        "question": "What is the minimum number of receptacles required on a kitchen countertop that is 6 feet long?",
        "options": ["1", "2", "3", "4"],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 210.52(C)(1)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 210.52(C)(1), receptacles must be installed so no point along the wall line is more than 24 inches from a receptacle. A 6-foot countertop requires a minimum of 2 receptacles."
      },
      {
        "id": "je-059",
        "question": "What type of cable is required for a fire alarm circuit?",
        "options": ["NM-B", "Type AC", "Type MC", "Power-limited fire alarm (PLFA) cable"],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 760.49",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Article 760, power-limited fire alarm circuits shall use cable specifically listed for fire alarm use, such as FPLP, FPLR, or FPL cables."
      },
      {
        "id": "je-060",
        "question": "What is the impedance in a purely capacitive AC circuit?",
        "options": ["Zero", "Equal to resistance", "Capacitive reactance only", "Infinite"],
        "correct": 2,
        "source": {
          "name": "Electrical Theory - AC Circuits",
          "url": ""
        },
        "explanation": "In a purely capacitive circuit, the impedance equals the capacitive reactance (Xc) since there is no resistance component. Xc = 1/(2πfC)."
      },
      {
        "id": "je-061",
        "question": "What is the minimum wire bending space for a #1 AWG conductor at a terminal?",
        "options": ["3 inches", "4 inches", "5 inches", "6 inches"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 312.6(A)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 312.6(A), #1 AWG conductors require a minimum of 5 inches of wire bending space at terminals."
      },
      {
        "id": "je-062",
        "question": "Outdoor receptacles in dwelling units must be located at what maximum height?",
        "options": ["6 feet", "6 feet 6 inches", "No maximum, but must be readily accessible", "7 feet"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.52(E)",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC 210.52(E), outdoor receptacles must be readily accessible, meaning no maximum height is specified, but they must be accessible without climbing or removing obstacles."
      },
      {
        "id": "je-063",
        "question": "What is the ampacity of #2 AWG copper THWN at 75°C?",
        "options": ["95 amps", "100 amps", "115 amps", "130 amps"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 310.16, #2 AWG copper with 75°C rated insulation has an ampacity of 115 amps."
      },
      {
        "id": "je-064",
        "question": "What is the minimum size bonding jumper for a 200-amp service with a metal water pipe?",
        "options": ["#8 AWG", "#6 AWG", "#4 AWG", "#2 AWG"],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 250.66",
          "url": "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
        },
        "explanation": "Per NEC Table 250.66, for service conductors sized for 200A (typically 2/0 AWG copper), the minimum bonding jumper size to the water pipe is #4 AWG copper."
      },
      {
        "id": "je-065",
        "question": "What is the formula for calculating current in a DC circuit?",
        "options": ["I = V × R", "I = V / R", "I = R / V", "I = V + R"],
        "correct": 1,
        "source": {
          "name": "Ohm's Law",
          "url": ""
        },
        "explanation": "Ohm's Law states that current (I) equals voltage (V) divided by resistance (R): I = V/R."
      }
    ]
  }
};

// Glossary of electrical terms
const GLOSSARY = {
  "ampacity": {
    term: "Ampacity",
    definition: "The maximum current, in amperes, that a conductor can carry continuously under conditions of use without exceeding its temperature rating.",
    reference: "NEC Article 100",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "branch circuit": {
    term: "Branch Circuit",
    definition: "The circuit conductors between the final overcurrent device protecting the circuit and the outlet(s). It distributes power from the panelboard to utilization equipment.",
    reference: "NEC Article 100, Article 210",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "circuit breaker": {
    term: "Circuit Breaker",
    definition: "A device designed to open and close a circuit by nonautomatic means and to open the circuit automatically on a predetermined overcurrent without damage to itself when properly applied within its rating.",
    reference: "NEC Article 100",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "conductor": {
    term: "Conductor",
    definition: "A material, usually in the form of a wire, cable, or bus bar, suitable for carrying an electric current. Copper and aluminum are the most common conductor materials.",
    reference: "NEC Article 100",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "conduit": {
    term: "Conduit",
    definition: "A raceway of circular cross section, such as EMT (Electrical Metallic Tubing), RMC (Rigid Metal Conduit), or PVC, used to protect and route electrical wiring.",
    reference: "NEC Chapter 3",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "demand factor": {
    term: "Demand Factor",
    definition: "The ratio of the maximum demand of a system to the total connected load of the system. Used in load calculations to account for the fact that not all loads operate simultaneously.",
    reference: "NEC Article 100, Article 220",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "dwelling unit": {
    term: "Dwelling Unit",
    definition: "A single unit providing complete and independent living facilities for one or more persons, including permanent provisions for living, sleeping, cooking, and sanitation.",
    reference: "NEC Article 100",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "emt": {
    term: "EMT (Electrical Metallic Tubing)",
    definition: "A thin-walled, unthreaded steel raceway used to protect and route electrical conductors. Also called thin-wall conduit. Connected using compression or set-screw fittings.",
    reference: "NEC Article 358",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "equipment grounding conductor": {
    term: "Equipment Grounding Conductor (EGC)",
    definition: "The conductive path that connects normally non-current-carrying metal parts of equipment to the system grounded conductor, the grounding electrode conductor, or both. Provides a low-impedance fault current path.",
    reference: "NEC Article 100, Article 250.118",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "feeder": {
    term: "Feeder",
    definition: "All circuit conductors between the service equipment, the source of a separately derived system, or other power supply source and the final branch-circuit overcurrent device.",
    reference: "NEC Article 100, Article 215",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "gfci": {
    term: "GFCI (Ground-Fault Circuit Interrupter)",
    definition: "A device intended for the protection of personnel that de-energizes a circuit when the current to ground exceeds a predetermined value (typically 5mA). Required in wet locations, bathrooms, kitchens, etc.",
    reference: "NEC Article 100, Article 210.8",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "afci": {
    term: "AFCI (Arc-Fault Circuit Interrupter)",
    definition: "A device intended to provide protection from the effects of arc faults by recognizing characteristics unique to arcing and de-energizing the circuit when an arc fault is detected.",
    reference: "NEC Article 100, Article 210.12",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "grounded conductor": {
    term: "Grounded Conductor (Neutral)",
    definition: "A system or circuit conductor that is intentionally grounded. In a typical residential system, this is the neutral conductor, identified by white or gray insulation.",
    reference: "NEC Article 100, Article 200",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "grounding electrode conductor": {
    term: "Grounding Electrode Conductor (GEC)",
    definition: "A conductor used to connect the system grounded conductor or the equipment to a grounding electrode or to a point on the grounding electrode system.",
    reference: "NEC Article 100, Article 250.62",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "overcurrent": {
    term: "Overcurrent",
    definition: "Any current in excess of the rated current of equipment or the ampacity of a conductor. It may result from overload, short circuit, or ground fault.",
    reference: "NEC Article 100",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "overcurrent protection": {
    term: "Overcurrent Protection",
    definition: "A device such as a fuse or circuit breaker that opens a circuit when current exceeds a predetermined value, protecting conductors and equipment from damage.",
    reference: "NEC Article 240",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "panelboard": {
    term: "Panelboard",
    definition: "A single panel or group of panel units designed for assembly in the form of a single panel, including buses and automatic overcurrent devices. May include switches for the control of light, heat, or power circuits.",
    reference: "NEC Article 100, Article 408",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "raceway": {
    term: "Raceway",
    definition: "An enclosed channel of metal or nonmetallic materials designed expressly for holding wires, cables, or busbars. Includes conduit, wireways, and cable trays.",
    reference: "NEC Article 100",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "receptacle": {
    term: "Receptacle",
    definition: "A contact device installed at the outlet for the connection of an attachment plug. A single receptacle is a single contact device; a duplex receptacle has two contact devices.",
    reference: "NEC Article 100, Article 406",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "service": {
    term: "Service",
    definition: "The conductors and equipment for delivering electric energy from the serving utility to the wiring system of the premises served.",
    reference: "NEC Article 100, Article 230",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "service drop": {
    term: "Service Drop",
    definition: "The overhead conductors between the utility electric supply system and the service point, typically from the utility pole to the building.",
    reference: "NEC Article 100, Article 230.24",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "voltage drop": {
    term: "Voltage Drop",
    definition: "The reduction in voltage in an electrical circuit between the source and load. NEC recommends no more than 3% drop for branch circuits and 5% total for feeders plus branch circuits.",
    reference: "NEC Article 210.19(A) Informational Note, Article 215.2(A)(4)",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "working space": {
    term: "Working Space",
    definition: "Clear space required around electrical equipment for safe operation and maintenance. Minimum depth varies by voltage: 3 feet for 0-150V, 3.5 feet for 151-600V.",
    reference: "NEC Article 110.26",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "bonding": {
    term: "Bonding",
    definition: "The permanent joining of metallic parts to form an electrically conductive path that ensures electrical continuity and the capacity to conduct safely any current likely to be imposed.",
    reference: "NEC Article 100, Article 250.90",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "bonding jumper": {
    term: "Bonding Jumper",
    definition: "A reliable conductor to ensure the required electrical conductivity between metal parts required to be electrically connected.",
    reference: "NEC Article 100, Article 250.102",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "continuous load": {
    term: "Continuous Load",
    definition: "A load where the maximum current is expected to continue for 3 hours or more. Conductors and overcurrent devices must be sized at 125% of the continuous load.",
    reference: "NEC Article 100",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "neutral": {
    term: "Neutral Conductor",
    definition: "The conductor connected to the neutral point of a system that is intended to carry current under normal conditions. In residential systems, the white or gray wire.",
    reference: "NEC Article 100",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "direct burial": {
    term: "Direct Burial",
    definition: "A wiring method where cables are installed directly in the earth without additional protection. Minimum burial depths are specified in NEC Table 300.5.",
    reference: "NEC Article 300.5",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "burial depth": {
    term: "Burial Depth",
    definition: "The minimum depth at which cables or conduits must be installed underground. Varies based on wiring method and location (under driveways, buildings, etc.).",
    reference: "NEC Table 300.5",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "box fill": {
    term: "Box Fill",
    definition: "The calculation to determine if an electrical box has adequate volume for the conductors, devices, and fittings it contains. Each conductor size has a specified volume allowance.",
    reference: "NEC Article 314.16",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "full load current": {
    term: "Full Load Current (FLC)",
    definition: "The current required to produce full-load torque at the motor's rated speed. Used for sizing motor branch circuit conductors and overcurrent protection.",
    reference: "NEC Article 430, Tables 430.248-430.250",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "power factor": {
    term: "Power Factor",
    definition: "The ratio of real power (watts) to apparent power (volt-amperes) in an AC circuit. A power factor of 1.0 means voltage and current are in phase (purely resistive load).",
    reference: "Electrical Theory",
    url: ""
  },
  "impedance": {
    term: "Impedance",
    definition: "The total opposition to current flow in an AC circuit, measured in ohms. Includes both resistance and reactance (inductive and capacitive).",
    reference: "Electrical Theory",
    url: ""
  },
  "resistance": {
    term: "Resistance",
    definition: "Opposition to current flow in a circuit, measured in ohms. Determined by conductor material, length, and cross-sectional area. Causes voltage drop and power dissipation as heat.",
    reference: "Electrical Theory (Ohm's Law)",
    url: ""
  },
  "capacitive reactance": {
    term: "Capacitive Reactance",
    definition: "Opposition to AC current flow caused by capacitance, measured in ohms. Decreases as frequency increases. Xc = 1/(2πfC).",
    reference: "Electrical Theory",
    url: ""
  },
  "small appliance circuit": {
    term: "Small Appliance Circuit",
    definition: "A 20-amp branch circuit required in kitchens, dining rooms, and similar areas to serve receptacle outlets for portable appliances. Minimum of two required per dwelling.",
    reference: "NEC Article 210.52(B)",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "tamper-resistant": {
    term: "Tamper-Resistant Receptacle",
    definition: "A receptacle with a built-in shutter mechanism that prevents insertion of foreign objects. Required in all dwelling unit locations for 15 and 20-amp, 125V receptacles.",
    reference: "NEC Article 406.12",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "disconnect": {
    term: "Disconnecting Means",
    definition: "A device, or group of devices, by which the conductors of a circuit can be disconnected from their source of supply. Required for services, motors, and other equipment.",
    reference: "NEC Article 100",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "rmc": {
    term: "RMC (Rigid Metal Conduit)",
    definition: "A thick-walled, threaded metal raceway providing excellent mechanical protection. Permitted in all locations including direct burial and concrete encasement.",
    reference: "NEC Article 344",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "thwn": {
    term: "THWN/THHN",
    definition: "Common insulation types for building wire. THWN is rated for wet and dry locations at 75°C. THHN is rated for dry locations at 90°C. THWN-2/THHN is dual-rated.",
    reference: "NEC Table 310.4(1)",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  },
  "awg": {
    term: "AWG (American Wire Gauge)",
    definition: "The standard system for measuring wire diameter in North America. Lower numbers indicate larger wire sizes. Common sizes: #14 (15A), #12 (20A), #10 (30A).",
    reference: "NEC Chapter 9",
    url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70"
  }
};

// Build a sorted array of glossary terms for matching (longest first to avoid partial matches)
const GLOSSARY_TERMS = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);

// Highlight vocabulary terms in text
function highlightVocabTerms(text) {
  let result = text;
  const matched = new Set();

  for (const termKey of GLOSSARY_TERMS) {
    // Create case-insensitive regex that matches whole words/phrases
    const regex = new RegExp(`\\b(${termKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');

    result = result.replace(regex, (match) => {
      const lowerMatch = match.toLowerCase();
      if (matched.has(lowerMatch)) return match; // Already highlighted
      matched.add(lowerMatch);
      return `<span class="vocab-term" data-term="${termKey}" tabindex="0">${match}</span>`;
    });
  }

  return result;
}

// Show vocabulary definition panel
function showVocabDefinition(termKey) {
  const term = GLOSSARY[termKey];
  if (!term) return;

  // Remove any existing panel
  hideVocabDefinition();

  // Mark term as active
  document.querySelectorAll('.vocab-term').forEach(el => el.classList.remove('active'));
  const activeTerm = document.querySelector(`.vocab-term[data-term="${termKey}"]`);
  if (activeTerm) activeTerm.classList.add('active');

  // Create and insert panel
  const panel = document.createElement('div');
  panel.className = 'vocab-panel show';
  panel.id = 'vocab-panel';

  const refLink = term.url
    ? `<a href="${term.url}" target="_blank" rel="noopener">${term.reference}</a>`
    : term.reference;

  panel.innerHTML = `
    <div class="vocab-panel-header">
      <span class="vocab-panel-term">${term.term}</span>
      <button class="vocab-panel-close" aria-label="Close definition">&times;</button>
    </div>
    <p class="vocab-panel-definition">${term.definition}</p>
    <p class="vocab-panel-reference">Reference: ${refLink}</p>
  `;

  // Insert after question text or feedback
  const feedback = document.getElementById('feedback');
  const questionText = document.querySelector('.question-text');
  const insertAfter = (feedback && feedback.classList.contains('show')) ? feedback : questionText;

  if (insertAfter) {
    insertAfter.parentNode.insertBefore(panel, insertAfter.nextSibling);
  }

  // Close button handler
  panel.querySelector('.vocab-panel-close').addEventListener('click', hideVocabDefinition);
}

// Hide vocabulary definition panel
function hideVocabDefinition() {
  const panel = document.getElementById('vocab-panel');
  if (panel) panel.remove();
  document.querySelectorAll('.vocab-term.active').forEach(el => el.classList.remove('active'));
}

// Initialize vocab term click handlers
function initVocabHandlers() {
  document.addEventListener('click', (e) => {
    const term = e.target.closest('.vocab-term');
    if (term) {
      e.preventDefault();
      const termKey = term.dataset.term;
      showVocabDefinition(termKey);
    } else if (!e.target.closest('.vocab-panel')) {
      // Click outside panel closes it
      hideVocabDefinition();
    }
  });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('vocab-term')) {
      e.preventDefault();
      showVocabDefinition(e.target.dataset.term);
    } else if (e.key === 'Escape') {
      hideVocabDefinition();
    }
  });
}

const App = {
  examData: null,
  currentExamId: 'journeyman-electrical',

  async loadExamData(examId = 'journeyman-electrical') {
    // Check localStorage first (admin edits), fall back to embedded data
    const stored = localStorage.getItem('exam_prep_questions');
    if (stored && examId === 'journeyman-electrical') {
      this.examData = {
        ...EXAM_DATA[examId],
        questions: JSON.parse(stored)
      };
    } else {
      this.examData = EXAM_DATA[examId] || null;
    }
    this.currentExamId = examId;
    return this.examData;
  },

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  },

  getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  },

  setUrlParam(name, value) {
    const params = new URLSearchParams(window.location.search);
    params.set(name, value);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }
};

// Letter mapping for options
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

// Render a question to the DOM
function renderQuestion(question, questionIndex, totalQuestions, containerId = 'question-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Highlight vocab terms in question and options
  const highlightedQuestion = highlightVocabTerms(question.question);
  const highlightedOptions = question.options.map(opt => highlightVocabTerms(opt));

  container.innerHTML = `
    <div class="question-header">
      <span class="question-number">Question ${questionIndex + 1} of ${totalQuestions}</span>
      <span class="question-id">${question.id}</span>
    </div>
    <p class="question-text">${highlightedQuestion}</p>
    <div class="options" role="radiogroup" aria-label="Answer options">
      ${highlightedOptions.map((option, i) => `
        <button class="option" data-index="${i}" role="radio" aria-checked="false" tabindex="0">
          <span class="option-letter">${LETTERS[i]}</span>
          <span class="option-text">${option}</span>
        </button>
      `).join('')}
    </div>
    <div class="feedback" id="feedback"></div>
  `;

  // Hide any open vocab panel when switching questions
  hideVocabDefinition();
}

// Show feedback after answering
function showFeedback(isCorrect, question, selectedIndex) {
  const feedback = document.getElementById('feedback');
  if (!feedback) return;

  // Hide vocab panel first
  hideVocabDefinition();

  feedback.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;

  const sourceLink = question.source?.url
    ? `<a href="${question.source.url}" target="_blank" rel="noopener">${question.source.name}</a>`
    : question.source?.name || 'General knowledge';

  // Highlight vocab terms in explanation
  const highlightedExplanation = highlightVocabTerms(question.explanation);

  feedback.innerHTML = `
    <div class="feedback-header">${isCorrect ? 'Correct!' : 'Incorrect'}</div>
    <p class="feedback-explanation">${highlightedExplanation}</p>
    <p class="feedback-source">Source: ${sourceLink}</p>
  `;

  // Mark options
  const options = document.querySelectorAll('.option');
  options.forEach((opt, i) => {
    opt.classList.add('disabled');
    opt.setAttribute('aria-disabled', 'true');
    if (i === question.correct) {
      opt.classList.add('correct');
    } else if (i === selectedIndex && !isCorrect) {
      opt.classList.add('incorrect');
    }
  });
}

// Initialize keyboard navigation for options
function initOptionKeyboardNav(onSelect) {
  document.addEventListener('keydown', (e) => {
    const options = document.querySelectorAll('.option:not(.disabled)');
    if (options.length === 0) return;

    // Letter keys A-D to select options
    const key = e.key.toUpperCase();
    const letterIndex = LETTERS.indexOf(key);
    if (letterIndex !== -1 && letterIndex < options.length) {
      e.preventDefault();
      onSelect(letterIndex);
    }
  });
}
