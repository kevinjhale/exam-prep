/**
 * Exam Prep App - Multi-exam support with questions and glossaries
 */

// Storage keys
const STORAGE_KEYS = {
  EXAMS: 'exam_prep_exams',
  CURRENT: 'exam_prep_current_exam',
  PROGRESS: 'exam_prep_progress'
};

// Default exam packages (embedded for offline use)
const DEFAULT_EXAMS = {
  'journeyman-electrical': {
    "id": "journeyman-electrical",
    "name": "Journeyman Electrician",
    "description": "NEC 2023 based practice questions for the journeyman electrician license exam. Covers electrical theory, NEC code requirements, calculations, and safety.",
    "version": "2.0",
    "passingScore": 70,
    "timeLimit": 14400,
    "questions": [
      {
        "id": "je-001",
        "question": "What is the minimum burial depth for direct burial UF cable without additional protection?",
        "options": [
          "6 inches",
          "12 inches",
          "18 inches",
          "24 inches"
        ],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Table 300.5",
          "url": ""
        },
        "explanation": "Per NEC Table 300.5, direct burial cables must be buried at least 24 inches when installed without additional protection such as concrete or RMC."
      },
      {
        "id": "je-002",
        "question": "What is the maximum number of #12 AWG THHN conductors allowed in a 1/2\" EMT conduit?",
        "options": [
          "5",
          "7",
          "9",
          "12"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Chapter 9, Table C1",
          "url": ""
        },
        "explanation": "According to NEC Chapter 9, Table C1, a 1/2\" EMT can contain a maximum of 9 #12 AWG THHN conductors based on 40% fill capacity."
      },
      {
        "id": "je-003",
        "question": "What is the ampacity of a #6 AWG copper conductor with THWN insulation at 75°C?",
        "options": [
          "40 amps",
          "55 amps",
          "65 amps",
          "75 amps"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": ""
        },
        "explanation": "Per NEC Table 310.16, #6 AWG copper with THWN insulation (75°C column) has an ampacity of 65 amps."
      },
      {
        "id": "je-004",
        "question": "What is the minimum working space depth in front of a 480V electrical panel?",
        "options": [
          "2 feet",
          "3 feet",
          "3.5 feet",
          "4 feet"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 110.26(A)(1)",
          "url": ""
        },
        "explanation": "Per NEC 110.26(A)(1), Table 110.26(A)(1), for 301-600V (Condition 1), the minimum depth of clear working space is 3.5 feet (1.0m)."
      },
      {
        "id": "je-005",
        "question": "What color must the grounded conductor (neutral) be?",
        "options": [
          "Green",
          "White or gray",
          "Red",
          "Any color with white tape"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 200.6",
          "url": ""
        },
        "explanation": "Per NEC 200.6, the grounded conductor must be identified by white or gray color, or three continuous white or gray stripes on other than green insulation."
      },
      {
        "id": "je-006",
        "question": "What is the maximum voltage drop recommended for branch circuits?",
        "options": [
          "2%",
          "3%",
          "5%",
          "8%"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 210.19(A) Informational Note",
          "url": ""
        },
        "explanation": "Per NEC 210.19(A) Informational Note No. 4, branch circuit conductors should be sized to prevent voltage drop exceeding 3% at the farthest outlet."
      },
      {
        "id": "je-007",
        "question": "A 120V circuit has a load of 1800 watts. What is the current draw?",
        "options": [
          "12 amps",
          "15 amps",
          "18 amps",
          "20 amps"
        ],
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
        "options": [
          "No minimum specified in NEC",
          "6 inches",
          "12 inches",
          "15 inches"
        ],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 210.52",
          "url": ""
        },
        "explanation": "The NEC does not specify a minimum mounting height for receptacles in dwelling units. However, local codes may have requirements, and ADA guidelines suggest 15 inches minimum for accessibility."
      },
      {
        "id": "je-009",
        "question": "What is the maximum length of a flexible cord used as a fixed wiring method?",
        "options": [
          "Not permitted",
          "6 feet",
          "10 feet",
          "25 feet"
        ],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 400.12",
          "url": ""
        },
        "explanation": "Per NEC 400.12, flexible cords shall not be used as a substitute for fixed wiring of a structure. They are only permitted for specific uses listed in 400.10."
      },
      {
        "id": "je-010",
        "question": "What size equipment grounding conductor is required for a 60-amp circuit?",
        "options": [
          "#14 AWG",
          "#12 AWG",
          "#10 AWG",
          "#8 AWG"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 250.122",
          "url": ""
        },
        "explanation": "Per NEC Table 250.122, a circuit protected by a 60-amp overcurrent device requires a minimum #10 AWG copper equipment grounding conductor."
      },
      {
        "id": "je-011",
        "question": "What is the maximum distance between receptacle outlets along a wall in a dwelling unit?",
        "options": [
          "6 feet",
          "8 feet",
          "10 feet",
          "12 feet"
        ],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 210.52(A)",
          "url": ""
        },
        "explanation": "Per NEC 210.52(A), receptacles must be installed so that no point along the floor line is more than 6 feet from an outlet, meaning outlets can be up to 12 feet apart."
      },
      {
        "id": "je-012",
        "question": "What is the standard voltage for a single-phase, three-wire residential service?",
        "options": [
          "120V",
          "208V",
          "240V",
          "120/240V"
        ],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 220",
          "url": ""
        },
        "explanation": "A standard single-phase, three-wire residential service provides 120/240V - 120V between each hot leg and neutral, and 240V between the two hot legs."
      },
      {
        "id": "je-013",
        "question": "GFCI protection is required for 125V, 15 and 20-amp receptacles in which location?",
        "options": [
          "Bedrooms",
          "Living rooms",
          "Kitchens serving countertop surfaces",
          "Hallways"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.8(A)(6)",
          "url": ""
        },
        "explanation": "Per NEC 210.8(A)(6), GFCI protection is required for all 125V, 15 and 20-amp receptacles in kitchens that serve countertop surfaces."
      },
      {
        "id": "je-014",
        "question": "What is the total resistance of three 30-ohm resistors connected in parallel?",
        "options": [
          "10 ohms",
          "30 ohms",
          "60 ohms",
          "90 ohms"
        ],
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
        "options": [
          "Standard breaker",
          "GFCI breaker",
          "AFCI breaker",
          "Dual function AFCI/GFCI breaker"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 680.44",
          "url": ""
        },
        "explanation": "Per NEC 680.44, all outlets supplying a spa or hot tub must be protected by a Class A GFCI."
      },
      {
        "id": "je-016",
        "question": "What is the ampacity of #10 AWG copper THWN at 75°C?",
        "options": [
          "25 amps",
          "30 amps",
          "35 amps",
          "40 amps"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": ""
        },
        "explanation": "Per NEC Table 310.16, #10 AWG copper with 75°C rated insulation (THWN) has an ampacity of 35 amps."
      },
      {
        "id": "je-017",
        "question": "What is the minimum size copper grounding electrode conductor for a 200-amp service?",
        "options": [
          "#8 AWG",
          "#6 AWG",
          "#4 AWG",
          "#2 AWG"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 250.66",
          "url": ""
        },
        "explanation": "Per NEC Table 250.66, for service entrance conductors up to 2/0 AWG copper (typically used for 200A service), the minimum copper grounding electrode conductor is #4 AWG."
      },
      {
        "id": "je-018",
        "question": "AFCI protection is required in which area of a dwelling unit?",
        "options": [
          "Bathrooms",
          "Garages",
          "Bedrooms",
          "Unfinished basements"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.12(A)",
          "url": ""
        },
        "explanation": "Per NEC 210.12(A), AFCI protection is required for 120V, 15 and 20-amp branch circuits supplying outlets in bedrooms, living rooms, dining rooms, and other dwelling areas."
      },
      {
        "id": "je-019",
        "question": "What is the maximum overcurrent protection for #14 AWG copper conductors?",
        "options": [
          "10 amps",
          "15 amps",
          "20 amps",
          "25 amps"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 240.4(D)",
          "url": ""
        },
        "explanation": "Per NEC 240.4(D), #14 AWG copper conductors shall be protected at not more than 15 amps."
      },
      {
        "id": "je-020",
        "question": "A 4-inch square metal box with 1-1/2\" depth has what volume?",
        "options": [
          "18 cu in",
          "21 cu in",
          "30.3 cu in",
          "42 cu in"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 314.16(A)",
          "url": ""
        },
        "explanation": "Per NEC Table 314.16(A), a 4-inch square metal box with 1-1/2 inch depth has a volume of 21 cubic inches."
      },
      {
        "id": "je-021",
        "question": "What is the volume allowance for each #12 AWG conductor in box fill calculations?",
        "options": [
          "1.75 cu in",
          "2.00 cu in",
          "2.25 cu in",
          "2.50 cu in"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 314.16(B)",
          "url": ""
        },
        "explanation": "Per NEC Table 314.16(B), each #12 AWG conductor requires 2.25 cubic inches of box volume."
      },
      {
        "id": "je-022",
        "question": "What is the minimum service size for a single-family dwelling?",
        "options": [
          "60 amps",
          "100 amps",
          "150 amps",
          "200 amps"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 230.79(C)",
          "url": ""
        },
        "explanation": "Per NEC 230.79(C), the minimum service for a single-family dwelling is 100 amps, 3-wire."
      },
      {
        "id": "je-023",
        "question": "What is the general lighting load in VA per square foot for dwelling units?",
        "options": [
          "1 VA",
          "2 VA",
          "3 VA",
          "5 VA"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 220.12",
          "url": ""
        },
        "explanation": "Per NEC Table 220.12, dwelling units require 3 VA per square foot for general lighting load calculations."
      },
      {
        "id": "je-024",
        "question": "What is the power factor of a purely resistive circuit?",
        "options": [
          "0",
          "0.5",
          "0.8",
          "1.0"
        ],
        "correct": 3,
        "source": {
          "name": "Electrical Theory - Power Factor",
          "url": ""
        },
        "explanation": "In a purely resistive circuit, voltage and current are in phase, resulting in a power factor of 1.0 (unity)."
      },
      {
        "id": "je-025",
        "question": "A motor with a 40-amp full load current requires what minimum branch circuit conductor ampacity?",
        "options": [
          "40 amps",
          "45 amps",
          "50 amps",
          "60 amps"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 430.22",
          "url": ""
        },
        "explanation": "Per NEC 430.22, motor branch circuit conductors must have an ampacity of not less than 125% of the motor FLC. 40A × 1.25 = 50 amps."
      },
      {
        "id": "je-026",
        "question": "What color identifies an equipment grounding conductor?",
        "options": [
          "White",
          "Gray",
          "Green or bare",
          "Blue"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 250.119",
          "url": ""
        },
        "explanation": "Per NEC 250.119, equipment grounding conductors shall be identified by green color, green with yellow stripes, or bare conductor."
      },
      {
        "id": "je-027",
        "question": "What is the maximum height for a circuit breaker operating handle in a panelboard?",
        "options": [
          "5 feet 6 inches",
          "6 feet",
          "6 feet 7 inches",
          "7 feet"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 240.24(A)",
          "url": ""
        },
        "explanation": "Per NEC 240.24(A), overcurrent devices shall be readily accessible and installed so the center of the grip of the operating handle is not more than 6 feet 7 inches above the floor."
      },
      {
        "id": "je-028",
        "question": "How many small appliance circuits are required in a dwelling kitchen?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 210.52(B)(1)",
          "url": ""
        },
        "explanation": "Per NEC 210.52(B)(1), a minimum of two 20-amp small appliance branch circuits are required to serve receptacle outlets in the kitchen, pantry, dining room, and breakfast room."
      },
      {
        "id": "je-029",
        "question": "What is the resistance of a circuit with 120V applied and 10A of current flow?",
        "options": [
          "10 ohms",
          "12 ohms",
          "120 ohms",
          "1200 ohms"
        ],
        "correct": 1,
        "source": {
          "name": "Ohm's Law",
          "url": ""
        },
        "explanation": "Using Ohm's Law: R = V/I = 120V / 10A = 12 ohms."
      },
      {
        "id": "je-030",
        "question": "What is the minimum headroom required in working spaces around electrical equipment?",
        "options": [
          "6 feet",
          "6 feet 3 inches",
          "6 feet 6 inches",
          "7 feet"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 110.26(A)(3)",
          "url": ""
        },
        "explanation": "Per NEC 110.26(A)(3), the minimum headroom of working spaces about service equipment, switchboards, panelboards, or motor control centers shall be 6 feet 6 inches."
      },
      {
        "id": "je-031",
        "question": "What is the ampacity of #8 AWG copper THWN at 75°C?",
        "options": [
          "40 amps",
          "50 amps",
          "55 amps",
          "65 amps"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": ""
        },
        "explanation": "Per NEC Table 310.16, #8 AWG copper with 75°C rated insulation has an ampacity of 50 amps."
      },
      {
        "id": "je-032",
        "question": "What is the minimum wire bending space for a #4 AWG conductor at a terminal?",
        "options": [
          "1 inch",
          "1.5 inches",
          "2 inches",
          "2.5 inches"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 312.6(A)",
          "url": ""
        },
        "explanation": "Per NEC Table 312.6(A), the minimum wire bending space for a #4 AWG conductor is 2 inches."
      },
      {
        "id": "je-033",
        "question": "What is the demand factor for the first 10 kW of electric range load?",
        "options": [
          "50%",
          "70%",
          "80%",
          "100%"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 220.55",
          "url": ""
        },
        "explanation": "Per NEC Table 220.55, Column C, the demand for one electric range up to 12 kW is 8 kW, which represents 80% of a 10 kW range."
      },
      {
        "id": "je-034",
        "question": "What is the maximum number of disconnects permitted for a service?",
        "options": [
          "2",
          "4",
          "6",
          "8"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 230.71(A)",
          "url": ""
        },
        "explanation": "Per NEC 230.71(A), the service disconnecting means shall consist of not more than six switches or six circuit breakers."
      },
      {
        "id": "je-035",
        "question": "Receptacles in a bathroom must be supplied by what type of circuit?",
        "options": [
          "15-amp general purpose",
          "20-amp dedicated",
          "20-amp shared with other bathrooms only",
          "Any 15 or 20-amp circuit"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.11(C)(3)",
          "url": ""
        },
        "explanation": "Per NEC 210.11(C)(3), the 20-amp bathroom circuit can supply a single bathroom or multiple bathrooms, but cannot serve other outlets outside of bathrooms."
      },
      {
        "id": "je-036",
        "question": "What is the minimum mounting height for a receptacle above a kitchen countertop?",
        "options": [
          "No minimum",
          "12 inches",
          "18 inches",
          "20 inches"
        ],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 210.52(C)",
          "url": ""
        },
        "explanation": "The NEC does not specify a minimum height above countertops for receptacles. It only requires receptacles to be installed so no point along the wall is more than 24 inches from a receptacle outlet."
      },
      {
        "id": "je-037",
        "question": "What is the maximum distance a receptacle can be from a bathroom sink?",
        "options": [
          "12 inches",
          "20 inches",
          "3 feet",
          "6 feet"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.52(D)",
          "url": ""
        },
        "explanation": "Per NEC 210.52(D), at least one receptacle outlet shall be installed within 3 feet of the outside edge of each bathroom basin."
      },
      {
        "id": "je-038",
        "question": "What type of cable is NOT permitted in wet locations?",
        "options": [
          "UF cable",
          "USE cable",
          "NM cable",
          "TC cable"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 334.12",
          "url": ""
        },
        "explanation": "Per NEC 334.12, NM (Romex) cable shall not be used in wet or damp locations. UF cable is specifically designed for wet locations and direct burial."
      },
      {
        "id": "je-039",
        "question": "What is the maximum distance between supports for 1/2\" EMT?",
        "options": [
          "4 feet",
          "6 feet",
          "8 feet",
          "10 feet"
        ],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 358.30(A)",
          "url": ""
        },
        "explanation": "Per NEC 358.30(A), EMT shall be securely fastened at intervals not exceeding 10 feet."
      },
      {
        "id": "je-040",
        "question": "What is the minimum cover required for PVC conduit under a driveway?",
        "options": [
          "12 inches",
          "18 inches",
          "24 inches",
          "30 inches"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 300.5",
          "url": ""
        },
        "explanation": "Per NEC Table 300.5, rigid nonmetallic conduit listed for direct burial under areas subject to vehicular traffic requires a minimum cover of 18 inches."
      },
      {
        "id": "je-041",
        "question": "What is the volume allowance for a single-gang device (switch or receptacle) in box fill calculations?",
        "options": [
          "One conductor volume",
          "Two conductor volumes",
          "Three conductor volumes",
          "Four conductor volumes"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 314.16(B)(4)",
          "url": ""
        },
        "explanation": "Per NEC 314.16(B)(4), each device (switch, receptacle, etc.) counts as two conductor volumes based on the largest conductor connected to it."
      },
      {
        "id": "je-042",
        "question": "Internal clamps in a box count as how many conductor volumes?",
        "options": [
          "Zero",
          "One",
          "Two",
          "One per clamp"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 314.16(B)(2)",
          "url": ""
        },
        "explanation": "Per NEC 314.16(B)(2), all internal cable clamps together count as one conductor volume, based on the largest conductor in the box."
      },
      {
        "id": "je-043",
        "question": "What is the ampacity of #4 AWG copper THWN at 75°C?",
        "options": [
          "70 amps",
          "85 amps",
          "95 amps",
          "100 amps"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": ""
        },
        "explanation": "Per NEC Table 310.16, #4 AWG copper with 75°C rated insulation has an ampacity of 85 amps."
      },
      {
        "id": "je-044",
        "question": "What is the standard frequency of AC power in the United States?",
        "options": [
          "50 Hz",
          "60 Hz",
          "100 Hz",
          "120 Hz"
        ],
        "correct": 1,
        "source": {
          "name": "Electrical Theory",
          "url": ""
        },
        "explanation": "The standard AC frequency in the United States is 60 Hz (cycles per second). European countries typically use 50 Hz."
      },
      {
        "id": "je-045",
        "question": "What is the power dissipated by a 100-ohm resistor with 2 amps flowing through it?",
        "options": [
          "200 watts",
          "400 watts",
          "50 watts",
          "100 watts"
        ],
        "correct": 1,
        "source": {
          "name": "Power Formula (P = I²R)",
          "url": ""
        },
        "explanation": "Using P = I²R: P = (2)² × 100 = 4 × 100 = 400 watts."
      },
      {
        "id": "je-046",
        "question": "A lighting outlet is required within how many feet of a dwelling unit entrance?",
        "options": [
          "3 feet",
          "6 feet",
          "10 feet",
          "No specific requirement"
        ],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 210.70",
          "url": ""
        },
        "explanation": "Per NEC 210.70, at least one wall switch-controlled lighting outlet shall be installed at each entrance, but no specific distance from the door is required."
      },
      {
        "id": "je-047",
        "question": "What type of conductor is required for service entrance cables exposed to the weather?",
        "options": [
          "THHN",
          "XHHW",
          "Type SE rated for wet locations",
          "Any insulated conductor"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 338.10(B)",
          "url": ""
        },
        "explanation": "Per NEC 338.10(B), service entrance cables used in wet locations must be listed for wet locations or have a moisture-resistant covering."
      },
      {
        "id": "je-048",
        "question": "What is the minimum trade size conduit for three #8 THWN conductors?",
        "options": [
          "1/2 inch",
          "3/4 inch",
          "1 inch",
          "1-1/4 inch"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Chapter 9, Table C1",
          "url": ""
        },
        "explanation": "Per NEC Chapter 9, Table C1, three #8 THWN conductors require a minimum 3/4-inch EMT (which allows up to 4 conductors)."
      },
      {
        "id": "je-049",
        "question": "What is the maximum continuous load on a 20-amp circuit breaker?",
        "options": [
          "15 amps",
          "16 amps",
          "18 amps",
          "20 amps"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 210.20(A)",
          "url": ""
        },
        "explanation": "Per NEC 210.20(A), the continuous load shall not exceed 80% of the branch circuit rating. 20A × 0.80 = 16 amps."
      },
      {
        "id": "je-050",
        "question": "The neutral conductor in a 3-phase, 4-wire wye system carries current when?",
        "options": [
          "Always",
          "Only when loads are balanced",
          "Only when loads are unbalanced",
          "Never"
        ],
        "correct": 2,
        "source": {
          "name": "Electrical Theory - Three Phase",
          "url": ""
        },
        "explanation": "In a balanced 3-phase, 4-wire wye system, the neutral carries no current because the phase currents cancel out. The neutral only carries current when the loads are unbalanced."
      },
      {
        "id": "je-051",
        "question": "What is the line voltage in a 208Y/120V three-phase system?",
        "options": [
          "120V",
          "208V",
          "240V",
          "277V"
        ],
        "correct": 1,
        "source": {
          "name": "Electrical Theory - Three Phase",
          "url": ""
        },
        "explanation": "In a 208Y/120V system, the line-to-line (phase-to-phase) voltage is 208V, while the line-to-neutral voltage is 120V."
      },
      {
        "id": "je-052",
        "question": "What is the relationship between line and phase voltage in a delta system?",
        "options": [
          "Line voltage = Phase voltage × 1.732",
          "Line voltage = Phase voltage",
          "Line voltage = Phase voltage ÷ 1.732",
          "Line voltage = Phase voltage × 2"
        ],
        "correct": 1,
        "source": {
          "name": "Electrical Theory - Three Phase",
          "url": ""
        },
        "explanation": "In a delta system, the line voltage equals the phase voltage because each winding is connected directly between two line conductors."
      },
      {
        "id": "je-053",
        "question": "What is the phase voltage in a 480Y/277V three-phase system?",
        "options": [
          "240V",
          "277V",
          "480V",
          "208V"
        ],
        "correct": 1,
        "source": {
          "name": "Electrical Theory - Three Phase",
          "url": ""
        },
        "explanation": "In a 480Y/277V system, the phase (line-to-neutral) voltage is 277V, while the line voltage is 480V."
      },
      {
        "id": "je-054",
        "question": "How many degrees apart are the phases in a three-phase system?",
        "options": [
          "90 degrees",
          "120 degrees",
          "180 degrees",
          "60 degrees"
        ],
        "correct": 1,
        "source": {
          "name": "Electrical Theory - Three Phase",
          "url": ""
        },
        "explanation": "In a three-phase system, each phase is separated by 120 electrical degrees (360° ÷ 3 = 120°)."
      },
      {
        "id": "je-055",
        "question": "What is the total power in a balanced three-phase system with 10 amps per phase at 208V and unity power factor?",
        "options": [
          "2,080 watts",
          "3,602 watts",
          "6,240 watts",
          "4,160 watts"
        ],
        "correct": 1,
        "source": {
          "name": "Three-Phase Power Formula",
          "url": ""
        },
        "explanation": "For three-phase power: P = √3 × V × I × PF = 1.732 × 208 × 10 × 1.0 = 3,602 watts."
      },
      {
        "id": "je-056",
        "question": "Outdoor receptacles must be located at what maximum height above grade?",
        "options": [
          "4 feet",
          "5 feet",
          "6 feet 6 inches",
          "No maximum height"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.52(E)",
          "url": ""
        },
        "explanation": "Per NEC 210.52(E), outdoor receptacles shall be installed so they are not more than 6 feet 6 inches above grade."
      },
      {
        "id": "je-057",
        "question": "What is the minimum size conductor for a 100-amp feeder?",
        "options": [
          "#4 AWG copper",
          "#3 AWG copper",
          "#2 AWG copper",
          "#1 AWG copper"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": ""
        },
        "explanation": "Per NEC Table 310.16, #3 AWG copper THWN at 75°C has an ampacity of 100 amps."
      },
      {
        "id": "je-058",
        "question": "How far must a receptacle be from the edge of a swimming pool?",
        "options": [
          "5 feet",
          "6 feet",
          "10 feet",
          "20 feet"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 680.22(A)(5)",
          "url": ""
        },
        "explanation": "Per NEC 680.22(A)(5), receptacles shall be located not less than 6 feet from the inside walls of the pool."
      },
      {
        "id": "je-059",
        "question": "A luminaire in a clothes closet must be how far from the storage area?",
        "options": [
          "6 inches",
          "12 inches",
          "18 inches",
          "24 inches"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 410.16",
          "url": ""
        },
        "explanation": "Per NEC 410.16(C), surface-mounted incandescent or LED luminaires must maintain a 12-inch clearance from the storage area defined in 410.2."
      },
      {
        "id": "je-060",
        "question": "What is the minimum ampacity for ungrounded conductors supplying a dwelling unit?",
        "options": [
          "60 amps",
          "100 amps",
          "125 amps",
          "150 amps"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 230.79(C)",
          "url": ""
        },
        "explanation": "Per NEC 230.79(C), for a single-family dwelling, the minimum service or feeder rating is 100 amps, 3-wire."
      },
      {
        "id": "je-061",
        "question": "What is the demand factor applied to 4 or more fastened-in-place appliances?",
        "options": [
          "65%",
          "70%",
          "75%",
          "80%"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 220.53",
          "url": ""
        },
        "explanation": "Per NEC 220.53, where four or more fastened-in-place appliances are served by the same feeder, a demand factor of 75% can be applied to the nameplate rating."
      },
      {
        "id": "je-062",
        "question": "What is the load calculation for a laundry circuit in a dwelling?",
        "options": [
          "1,000 VA",
          "1,500 VA",
          "1,800 VA",
          "2,000 VA"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 220.52(B)",
          "url": ""
        },
        "explanation": "Per NEC 220.52(B), a minimum load of 1,500 VA shall be included for each 20-amp laundry circuit."
      },
      {
        "id": "je-063",
        "question": "What is the maximum percentage fill for one conductor in a conduit?",
        "options": [
          "31%",
          "40%",
          "53%",
          "60%"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Chapter 9, Table 1",
          "url": ""
        },
        "explanation": "Per NEC Chapter 9, Table 1, one conductor is permitted a maximum of 53% conduit fill."
      },
      {
        "id": "je-064",
        "question": "What is the maximum percentage fill for three or more conductors in a conduit?",
        "options": [
          "31%",
          "40%",
          "53%",
          "60%"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Chapter 9, Table 1",
          "url": ""
        },
        "explanation": "Per NEC Chapter 9, Table 1, three or more conductors are permitted a maximum of 40% conduit fill."
      },
      {
        "id": "je-065",
        "question": "What is the maximum number of 90-degree bends permitted in one conduit run?",
        "options": [
          "2",
          "3",
          "4",
          "No limit if pull boxes are used"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 358.26",
          "url": ""
        },
        "explanation": "Per NEC 358.26 (and similar articles for other conduit types), there shall not be more than the equivalent of four quarter bends (360 degrees total) between pull points."
      },
      {
        "id": "je-066",
        "question": "What is the rating of a standard duplex receptacle in a dwelling?",
        "options": [
          "15 amps",
          "20 amps",
          "15 or 20 amps depending on circuit",
          "30 amps"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 210.21(B)(3)",
          "url": ""
        },
        "explanation": "Per NEC Table 210.21(B)(3), a 15-amp receptacle is permitted on a 15 or 20-amp circuit, and a 20-amp receptacle is permitted only on a 20-amp circuit."
      },
      {
        "id": "je-067",
        "question": "What size equipment grounding conductor is required for a 30-amp circuit?",
        "options": [
          "#14 AWG",
          "#12 AWG",
          "#10 AWG",
          "#8 AWG"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 250.122",
          "url": ""
        },
        "explanation": "Per NEC Table 250.122, a 30-amp circuit requires a minimum #10 AWG copper equipment grounding conductor."
      },
      {
        "id": "je-068",
        "question": "What size equipment grounding conductor is required for a 100-amp circuit?",
        "options": [
          "#10 AWG",
          "#8 AWG",
          "#6 AWG",
          "#4 AWG"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 250.122",
          "url": ""
        },
        "explanation": "Per NEC Table 250.122, a 100-amp circuit requires a minimum #8 AWG copper equipment grounding conductor."
      },
      {
        "id": "je-069",
        "question": "What is the minimum clearance above a roof for a service drop?",
        "options": [
          "3 feet",
          "8 feet",
          "10 feet",
          "18 feet"
        ],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 230.24(A)",
          "url": ""
        },
        "explanation": "Per NEC 230.24(A), service-drop conductors must maintain a minimum 3-foot clearance above the roof surface they pass over, with exceptions for steep roofs."
      },
      {
        "id": "je-070",
        "question": "What is the minimum clearance of service conductors over a driveway?",
        "options": [
          "10 feet",
          "12 feet",
          "15 feet",
          "18 feet"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 230.24(B)",
          "url": ""
        },
        "explanation": "Per NEC 230.24(B), service drop conductors up to 300V to ground must maintain 12-foot clearance over residential driveways."
      },
      {
        "id": "je-071",
        "question": "What is the minimum size aluminum conductor for underground service laterals?",
        "options": [
          "#8 AWG",
          "#6 AWG",
          "#4 AWG",
          "#2 AWG"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 230.31(B)",
          "url": ""
        },
        "explanation": "Per NEC 230.31(B), the minimum size aluminum conductor for service laterals is #6 AWG."
      },
      {
        "id": "je-072",
        "question": "A motor disconnecting means must be within sight and within what distance of the motor?",
        "options": [
          "25 feet",
          "50 feet",
          "No distance limit if in sight",
          "100 feet"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 430.102(A)",
          "url": ""
        },
        "explanation": "Per NEC 430.102(A), the disconnecting means must be in sight from the motor location. 'In sight' is defined as visible and not more than 50 feet away."
      },
      {
        "id": "je-073",
        "question": "What type of overcurrent protection is required for a transformer primary rated 9 amps or more?",
        "options": [
          "100% of primary current",
          "125% of primary current",
          "150% of primary current",
          "167% of primary current"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 450.3(B)",
          "url": ""
        },
        "explanation": "Per NEC Table 450.3(B), transformers 1000V or less with primary current of 9 amps or more require primary overcurrent protection at 125% of rated primary current."
      },
      {
        "id": "je-074",
        "question": "What is the standard load used for a general-use receptacle outlet?",
        "options": [
          "150 VA",
          "180 VA",
          "200 VA",
          "220 VA"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 220.14(I)",
          "url": ""
        },
        "explanation": "Per NEC 220.14(I), each general-use receptacle outlet in other than dwelling units shall be calculated at 180 VA."
      },
      {
        "id": "je-075",
        "question": "What is the standard VA load for each small appliance circuit?",
        "options": [
          "1,000 VA",
          "1,500 VA",
          "1,800 VA",
          "2,400 VA"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 220.52(A)",
          "url": ""
        },
        "explanation": "Per NEC 220.52(A), a load of not less than 1,500 VA shall be included for each 20-amp small appliance circuit."
      },
      {
        "id": "je-076",
        "question": "Type NM cable is limited to what maximum building height?",
        "options": [
          "Two stories",
          "Three stories",
          "No limit",
          "Four stories"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 334.10(3)",
          "url": ""
        },
        "explanation": "Per NEC 334.10(3), Type NM cable is permitted in dwellings and structures not exceeding three floors above grade."
      },
      {
        "id": "je-077",
        "question": "What is the minimum radius for bending Type NM cable?",
        "options": [
          "3 times the cable diameter",
          "5 times the cable diameter",
          "6 times the cable diameter",
          "8 times the cable diameter"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 334.24",
          "url": ""
        },
        "explanation": "Per NEC 334.24, bends in Type NM cable shall be made so that the cable is not damaged, and the radius of the bend shall be not less than 5 times the diameter of the cable."
      },
      {
        "id": "je-078",
        "question": "What is the maximum ambient temperature for Type THHN insulation?",
        "options": [
          "60°C",
          "75°C",
          "90°C",
          "105°C"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 310.4(1)",
          "url": ""
        },
        "explanation": "THHN insulation is rated for 90°C in dry and damp locations."
      },
      {
        "id": "je-079",
        "question": "What derating factor applies when 7-9 current-carrying conductors are in a raceway?",
        "options": [
          "60%",
          "70%",
          "80%",
          "85%"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 310.15(C)(1)",
          "url": ""
        },
        "explanation": "Per NEC Table 310.15(C)(1), when 7-9 current-carrying conductors are in a raceway, the ampacity must be adjusted to 70% of the table value."
      },
      {
        "id": "je-080",
        "question": "What derating factor applies when 4-6 current-carrying conductors are in a raceway?",
        "options": [
          "70%",
          "80%",
          "85%",
          "90%"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 310.15(C)(1)",
          "url": ""
        },
        "explanation": "Per NEC Table 310.15(C)(1), when 4-6 current-carrying conductors are in a raceway, the ampacity must be adjusted to 80% of the table value."
      },
      {
        "id": "je-081",
        "question": "What is the impedance of a series RL circuit with R=30Ω and XL=40Ω?",
        "options": [
          "35 ohms",
          "50 ohms",
          "70 ohms",
          "100 ohms"
        ],
        "correct": 1,
        "source": {
          "name": "Electrical Theory - AC Circuits",
          "url": ""
        },
        "explanation": "Impedance Z = √(R² + XL²) = √(30² + 40²) = √(900 + 1600) = √2500 = 50 ohms."
      },
      {
        "id": "je-082",
        "question": "What is the inductive reactance of a 100mH inductor at 60Hz?",
        "options": [
          "6 ohms",
          "18.85 ohms",
          "37.7 ohms",
          "60 ohms"
        ],
        "correct": 2,
        "source": {
          "name": "Electrical Theory - Reactance",
          "url": ""
        },
        "explanation": "XL = 2πfL = 2 × 3.14159 × 60 × 0.1 = 37.7 ohms."
      },
      {
        "id": "je-083",
        "question": "What is the capacitive reactance of a 100µF capacitor at 60Hz?",
        "options": [
          "2.65 ohms",
          "26.5 ohms",
          "265 ohms",
          "2650 ohms"
        ],
        "correct": 1,
        "source": {
          "name": "Electrical Theory - Reactance",
          "url": ""
        },
        "explanation": "XC = 1/(2πfC) = 1/(2 × 3.14159 × 60 × 0.0001) = 26.5 ohms."
      },
      {
        "id": "je-084",
        "question": "In an AC circuit, true power is measured in what unit?",
        "options": [
          "VA",
          "VAR",
          "Watts",
          "PF"
        ],
        "correct": 2,
        "source": {
          "name": "Electrical Theory - AC Power",
          "url": ""
        },
        "explanation": "True power (real power) is measured in watts (W). Apparent power is measured in VA, and reactive power is measured in VAR."
      },
      {
        "id": "je-085",
        "question": "What is the power factor of a circuit with 1000W true power and 1250VA apparent power?",
        "options": [
          "0.70",
          "0.75",
          "0.80",
          "0.85"
        ],
        "correct": 2,
        "source": {
          "name": "Electrical Theory - Power Factor",
          "url": ""
        },
        "explanation": "Power Factor = True Power / Apparent Power = 1000W / 1250VA = 0.80 or 80%."
      },
      {
        "id": "je-086",
        "question": "In a series circuit, what happens to total resistance when more resistors are added?",
        "options": [
          "Decreases",
          "Increases",
          "Stays the same",
          "Becomes zero"
        ],
        "correct": 1,
        "source": {
          "name": "Electrical Theory - Series Circuits",
          "url": ""
        },
        "explanation": "In a series circuit, total resistance equals the sum of all resistances (Rt = R1 + R2 + R3...), so adding more resistors increases total resistance."
      },
      {
        "id": "je-087",
        "question": "In a parallel circuit, what happens to total resistance when more resistors are added?",
        "options": [
          "Decreases",
          "Increases",
          "Stays the same",
          "Doubles"
        ],
        "correct": 0,
        "source": {
          "name": "Electrical Theory - Parallel Circuits",
          "url": ""
        },
        "explanation": "In a parallel circuit, total resistance decreases when more resistors are added because there are more paths for current to flow."
      },
      {
        "id": "je-088",
        "question": "What type of connection is used to reduce starting current in a three-phase motor?",
        "options": [
          "Delta-Delta",
          "Wye-Delta",
          "Delta-Wye",
          "Series connection"
        ],
        "correct": 1,
        "source": {
          "name": "Motor Control - Starting Methods",
          "url": ""
        },
        "explanation": "Wye-Delta (Star-Delta) starting reduces starting current to about 33% of full-voltage starting current by initially connecting motor windings in wye configuration."
      },
      {
        "id": "je-089",
        "question": "What is the locked rotor current typically compared to full load current?",
        "options": [
          "Same as FLC",
          "2-3 times FLC",
          "4-8 times FLC",
          "10-12 times FLC"
        ],
        "correct": 2,
        "source": {
          "name": "Motor Theory - Starting Current",
          "url": ""
        },
        "explanation": "Locked rotor (starting) current is typically 4-8 times the full load current, depending on motor design and starting method."
      },
      {
        "id": "je-090",
        "question": "What is the maximum motor overload protection for a motor with a 1.15 service factor?",
        "options": [
          "115%",
          "125%",
          "130%",
          "140%"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 430.32(A)(1)",
          "url": ""
        },
        "explanation": "Per NEC 430.32(A)(1), motors with a service factor of 1.15 or greater may have overload protection sized at 125% of nameplate FLC."
      },
      {
        "id": "je-091",
        "question": "What is the maximum short-circuit and ground-fault protection for a motor using an inverse time circuit breaker?",
        "options": [
          "150%",
          "175%",
          "250%",
          "300%"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 430.52",
          "url": ""
        },
        "explanation": "Per NEC Table 430.52, an inverse time circuit breaker can be sized at a maximum of 250% of motor FLC for short-circuit and ground-fault protection."
      },
      {
        "id": "je-092",
        "question": "A GFCI device trips at what level of ground fault current?",
        "options": [
          "5 mA",
          "30 mA",
          "100 mA",
          "500 mA"
        ],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 210.8",
          "url": ""
        },
        "explanation": "Class A GFCI devices, required for personnel protection, trip when ground fault current reaches approximately 4-6 mA (typically listed as 5 mA)."
      },
      {
        "id": "je-093",
        "question": "What is the minimum wire size for receptacle circuits in a dwelling?",
        "options": [
          "#16 AWG",
          "#14 AWG",
          "#12 AWG",
          "#10 AWG"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 210.3",
          "url": ""
        },
        "explanation": "Per NEC Table 210.3, the minimum conductor size for 15-amp circuits (the minimum for general receptacles) is #14 AWG copper."
      },
      {
        "id": "je-094",
        "question": "What is the required ampacity of conductors supplying a single continuous-duty motor?",
        "options": [
          "100% of FLC",
          "115% of FLC",
          "125% of FLC",
          "150% of FLC"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 430.22(A)",
          "url": ""
        },
        "explanation": "Per NEC 430.22(A), conductors supplying a single motor shall have an ampacity not less than 125% of the motor full-load current."
      },
      {
        "id": "je-095",
        "question": "What is the demand factor for the first 10 kVA of commercial lighting load?",
        "options": [
          "50%",
          "75%",
          "100%",
          "125%"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 220.42",
          "url": ""
        },
        "explanation": "Per NEC Table 220.42, the first 10 kVA of lighting load is calculated at 100% demand factor."
      },
      {
        "id": "je-096",
        "question": "Emergency system transfer equipment must transfer within how many seconds?",
        "options": [
          "5 seconds",
          "10 seconds",
          "30 seconds",
          "60 seconds"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 700.12",
          "url": ""
        },
        "explanation": "Per NEC 700.12, emergency system equipment must be arranged to provide power within 10 seconds of failure of the normal supply."
      },
      {
        "id": "je-097",
        "question": "Legally required standby systems must restore power within how many seconds?",
        "options": [
          "10 seconds",
          "30 seconds",
          "60 seconds",
          "120 seconds"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 701.12",
          "url": ""
        },
        "explanation": "Per NEC 701.12, legally required standby systems must be arranged to provide power within 60 seconds of failure of the normal supply."
      },
      {
        "id": "je-098",
        "question": "What color is used to identify the high leg (wild leg) of a 4-wire delta system?",
        "options": [
          "Red",
          "Blue",
          "Orange",
          "Yellow"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 110.15",
          "url": ""
        },
        "explanation": "Per NEC 110.15, the high leg of a 4-wire delta-connected system shall be durably and permanently marked by an orange color."
      },
      {
        "id": "je-099",
        "question": "What is the voltage of the high leg to ground in a 240V 4-wire delta system?",
        "options": [
          "120V",
          "208V",
          "240V",
          "277V"
        ],
        "correct": 1,
        "source": {
          "name": "Electrical Theory - Delta Systems",
          "url": ""
        },
        "explanation": "In a 240V 4-wire delta system, the high leg voltage to ground is 240V × 0.866 = approximately 208V."
      },
      {
        "id": "je-100",
        "question": "What is the maximum distance between NM cable supports?",
        "options": [
          "3 feet",
          "4 feet",
          "4.5 feet",
          "6 feet"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 334.30",
          "url": ""
        },
        "explanation": "Per NEC 334.30, NM cable shall be secured at intervals not exceeding 4.5 feet and within 12 inches of every cabinet, box, or fitting."
      },
      {
        "id": "je-101",
        "question": "A kitchen island countertop requires a receptacle if it has a long dimension of at least?",
        "options": [
          "12 inches",
          "18 inches",
          "24 inches",
          "36 inches"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.52(C)(2)",
          "url": ""
        },
        "explanation": "Per NEC 210.52(C)(2), at least one receptacle outlet shall be installed at each island countertop with a long dimension of 24 inches or greater."
      },
      {
        "id": "je-102",
        "question": "Peninsula countertops require a receptacle if the countertop has a long dimension of at least?",
        "options": [
          "12 inches",
          "18 inches",
          "24 inches",
          "36 inches"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.52(C)(3)",
          "url": ""
        },
        "explanation": "Per NEC 210.52(C)(3), at least one receptacle outlet shall be installed at each peninsular countertop with a long dimension of 24 inches or greater."
      },
      {
        "id": "je-103",
        "question": "What is the maximum height for a floor-mounted receptacle in a countertop?",
        "options": [
          "6 inches",
          "12 inches",
          "18 inches",
          "20 inches"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 210.52(C)(5)",
          "url": ""
        },
        "explanation": "Per NEC 210.52(C)(5), receptacle outlets rendered not readily accessible by appliances fastened in place or built-in, or by countertops, shall not be considered required outlets."
      },
      {
        "id": "je-104",
        "question": "What is the minimum number of 20-amp branch circuits required for a 2,400 square foot dwelling?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.11",
          "url": ""
        },
        "explanation": "Minimum circuits = (2,400 sq ft × 3 VA) / (120V × 20A) = 7,200 / 2,400 = 3 general lighting circuits, plus 2 small appliance + 1 laundry = 6 minimum, but question asks about branch circuits which would be at least 4 for lighting."
      },
      {
        "id": "je-105",
        "question": "The accessible portion of an equipment grounding conductor of a branch circuit must be?",
        "options": [
          "Bare, covered with green insulation, or green with yellow stripes",
          "Any color except white or gray",
          "Bare only",
          "Any color with green tape at terminations"
        ],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 250.119",
          "url": ""
        },
        "explanation": "Per NEC 250.119, equipment grounding conductors shall be identified by bare, green, or green with yellow stripes insulation."
      },
      {
        "id": "je-106",
        "question": "What size copper conductor is required for a 150-amp service?",
        "options": [
          "#2 AWG",
          "#1 AWG",
          "#1/0 AWG",
          "#2/0 AWG"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": ""
        },
        "explanation": "Per NEC Table 310.16, #1/0 AWG copper THWN at 75°C has an ampacity of 150 amps."
      },
      {
        "id": "je-107",
        "question": "What size copper equipment grounding conductor is required for a 200-amp service?",
        "options": [
          "#4 AWG",
          "#6 AWG",
          "#8 AWG",
          "#2 AWG"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 250.122",
          "url": ""
        },
        "explanation": "Per NEC Table 250.122, a 200-amp circuit requires a minimum #6 AWG copper equipment grounding conductor."
      },
      {
        "id": "je-108",
        "question": "A dwelling unit requires at least one receptacle in an attached garage?",
        "options": [
          "True - one outlet required",
          "False - garage receptacles are optional",
          "Only if the garage is over 200 sq ft",
          "Only if a door opener is installed"
        ],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 210.52(G)(1)",
          "url": ""
        },
        "explanation": "Per NEC 210.52(G)(1), at least one receptacle outlet shall be installed in each attached garage and each detached garage with electric power."
      },
      {
        "id": "je-109",
        "question": "GFCI protection is required for 250V receptacles in what location?",
        "options": [
          "Bathrooms only",
          "Kitchens only",
          "Not required for 250V",
          "Basements and garages"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.8(A)",
          "url": ""
        },
        "explanation": "Per NEC 210.8(A), GFCI protection requirements apply to 125V, 15 and 20-amp receptacles. 250V receptacles have different requirements."
      },
      {
        "id": "je-110",
        "question": "What is the maximum VA per outlet used in commercial general-use receptacle calculations?",
        "options": [
          "150 VA",
          "180 VA",
          "200 VA",
          "250 VA"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 220.14(I)",
          "url": ""
        },
        "explanation": "Per NEC 220.14(I), each general-use receptacle outlet in commercial occupancies shall be computed at not less than 180 VA."
      },
      {
        "id": "je-111",
        "question": "What is the minimum mounting height for a disconnect in sight of a motor?",
        "options": [
          "No minimum",
          "18 inches",
          "36 inches",
          "48 inches"
        ],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 430.102",
          "url": ""
        },
        "explanation": "The NEC does not specify a minimum mounting height for motor disconnects, only that they be readily accessible and within sight of the motor."
      },
      {
        "id": "je-112",
        "question": "What is the maximum length of a tap conductor without overcurrent protection when connected to a 100-amp feeder?",
        "options": [
          "10 feet",
          "25 feet",
          "50 feet",
          "100 feet"
        ],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 240.21(B)(1)",
          "url": ""
        },
        "explanation": "Per NEC 240.21(B)(1), tap conductors may be up to 10 feet long without overcurrent protection if they meet specific requirements including having ampacity at least 10% of the feeder rating."
      },
      {
        "id": "je-113",
        "question": "What is the minimum clear working space width in front of a panelboard?",
        "options": [
          "24 inches",
          "30 inches",
          "36 inches",
          "Width of equipment or 30 inches, whichever is greater"
        ],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 110.26(A)(2)",
          "url": ""
        },
        "explanation": "Per NEC 110.26(A)(2), the width of the working space shall be the width of the equipment or 30 inches, whichever is greater."
      },
      {
        "id": "je-114",
        "question": "Illumination is required for working spaces around electrical equipment?",
        "options": [
          "Not required",
          "Required at all times",
          "Required for equipment rated 600V or less",
          "Required for equipment over 600V only"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 110.26(D)",
          "url": ""
        },
        "explanation": "Per NEC 110.26(D), illumination shall be provided for all working spaces about service equipment, switchboards, switchgear, panelboards, or motor control centers."
      },
      {
        "id": "je-115",
        "question": "What is the minimum length of free conductor required at outlet boxes?",
        "options": [
          "3 inches",
          "6 inches",
          "8 inches",
          "12 inches"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 300.14",
          "url": ""
        },
        "explanation": "Per NEC 300.14, at least 6 inches of free conductor, measured from the point where conductors emerge from the raceway or cable sheath, shall be left at each outlet."
      },
      {
        "id": "je-116",
        "question": "Underground feeder (UF) cable may be used in what location?",
        "options": [
          "Exposed in sunlight",
          "Embedded in concrete",
          "Direct burial",
          "All of the above"
        ],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 340.10",
          "url": ""
        },
        "explanation": "Per NEC 340.10, Type UF cable is permitted for direct burial, embedded in concrete, and exposed to sunlight when identified as sunlight resistant."
      },
      {
        "id": "je-117",
        "question": "What is the minimum size copper conductor for direct burial without additional protection?",
        "options": [
          "#18 AWG",
          "#16 AWG",
          "#14 AWG",
          "#12 AWG"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 340.104",
          "url": ""
        },
        "explanation": "Per NEC 340.104, the minimum conductor size for UF cable is #14 AWG copper or #12 AWG aluminum."
      },
      {
        "id": "je-118",
        "question": "How many feet of working space is required behind a large switchboard with rear access?",
        "options": [
          "2 feet",
          "3 feet",
          "4 feet",
          "Same as front access"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 110.26(A)(1)",
          "url": ""
        },
        "explanation": "Per NEC 110.26(A)(4), rear access to working space requires additional clearance as specified, typically matching front clearance requirements for the voltage level."
      },
      {
        "id": "je-119",
        "question": "A disconnect serving a hermetic refrigerant motor-compressor shall be rated at least?",
        "options": [
          "100% of rated load current",
          "115% of rated load current",
          "125% of rated load current",
          "150% of rated load current"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 440.12(A)(1)",
          "url": ""
        },
        "explanation": "Per NEC 440.12(A)(1), the disconnect ampere rating shall be at least 115% of the rated-load current for a hermetic refrigerant motor-compressor."
      },
      {
        "id": "je-120",
        "question": "What is the minimum cover for rigid metal conduit in a one-way traffic area?",
        "options": [
          "6 inches",
          "12 inches",
          "18 inches",
          "24 inches"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 300.5",
          "url": ""
        },
        "explanation": "Per NEC Table 300.5, rigid metal conduit under one-way traffic areas requires 18 inches of cover."
      },
      {
        "id": "je-121",
        "question": "What is the ampacity of #2 AWG copper THWN at 75°C?",
        "options": [
          "95 amps",
          "100 amps",
          "115 amps",
          "130 amps"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": ""
        },
        "explanation": "Per NEC Table 310.16, #2 AWG copper with 75°C rated insulation (THWN) has an ampacity of 115 amps."
      },
      {
        "id": "je-122",
        "question": "What is the ampacity of 1/0 AWG copper THWN at 75°C?",
        "options": [
          "125 amps",
          "150 amps",
          "170 amps",
          "195 amps"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": ""
        },
        "explanation": "Per NEC Table 310.16, 1/0 AWG copper with 75°C rated insulation (THWN) has an ampacity of 150 amps."
      },
      {
        "id": "je-123",
        "question": "What is the ampacity of 2/0 AWG copper THWN at 75°C?",
        "options": [
          "150 amps",
          "175 amps",
          "195 amps",
          "200 amps"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": ""
        },
        "explanation": "Per NEC Table 310.16, 2/0 AWG copper with 75°C rated insulation (THWN) has an ampacity of 175 amps."
      },
      {
        "id": "je-124",
        "question": "What is the ampacity of 3/0 AWG copper THWN at 75°C?",
        "options": [
          "175 amps",
          "200 amps",
          "225 amps",
          "250 amps"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": ""
        },
        "explanation": "Per NEC Table 310.16, 3/0 AWG copper with 75°C rated insulation (THWN) has an ampacity of 200 amps."
      },
      {
        "id": "je-125",
        "question": "What is the ampacity of 4/0 AWG copper THWN at 75°C?",
        "options": [
          "200 amps",
          "230 amps",
          "255 amps",
          "280 amps"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": ""
        },
        "explanation": "Per NEC Table 310.16, 4/0 AWG copper with 75°C rated insulation (THWN) has an ampacity of 230 amps."
      },
      {
        "id": "je-126",
        "question": "The total load on a neutral conductor is calculated at what percentage for a dryer circuit?",
        "options": [
          "50%",
          "70%",
          "100%",
          "The neutral carries the unbalanced load"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 220.61",
          "url": ""
        },
        "explanation": "Per NEC 220.61(B), for household electric dryers, a demand factor of 70% may be applied to the neutral load."
      },
      {
        "id": "je-127",
        "question": "A transformer secondary conductor is protected by the primary overcurrent device when?",
        "options": [
          "Never",
          "When secondary is less than 9 amps",
          "When the transformer is 1000V or less",
          "When ampacity is sufficient per 450.3"
        ],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 450.3",
          "url": ""
        },
        "explanation": "Per NEC 450.3(B), transformer secondary conductors may be protected by the primary overcurrent device when requirements in the table are met."
      },
      {
        "id": "je-128",
        "question": "What is the maximum voltage for Class 2 circuits?",
        "options": [
          "24V",
          "30V",
          "42.4V peak",
          "150V"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 725.121",
          "url": ""
        },
        "explanation": "Per NEC Chapter 9, Table 11(A), Class 2 circuits have a maximum voltage of 30V AC or 42.4V peak (60V DC)."
      },
      {
        "id": "je-129",
        "question": "Conductors from a solar photovoltaic system are considered what type?",
        "options": [
          "Branch circuit conductors",
          "Feeder conductors",
          "Service conductors",
          "Source circuit conductors"
        ],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 690.2",
          "url": ""
        },
        "explanation": "Per NEC 690.2, conductors between modules and from modules to the inverter are called 'source circuit' or 'photovoltaic source circuit' conductors."
      },
      {
        "id": "je-130",
        "question": "What is the maximum PV system voltage for dwelling units?",
        "options": [
          "150V",
          "300V",
          "600V",
          "1000V"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 690.7(C)",
          "url": ""
        },
        "explanation": "Per NEC 690.7(C), PV systems for one and two-family dwellings shall be permitted to have a maximum system voltage of 600V."
      },
      {
        "id": "je-131",
        "question": "Fire pump circuits require what type of wiring method?",
        "options": [
          "Any approved method",
          "Only rigid metal conduit",
          "Only MI cable",
          "Service entrance-type or approved methods"
        ],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Article 695.6(A)",
          "url": ""
        },
        "explanation": "Per NEC 695.6, fire pump supply conductors shall be kept entirely independent of all other wiring and shall be enclosed in approved raceways."
      },
      {
        "id": "je-132",
        "question": "What is the maximum distance from a sink that a dishwasher receptacle can be located?",
        "options": [
          "No maximum",
          "2 feet",
          "3 feet",
          "6 feet"
        ],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 210.52",
          "url": ""
        },
        "explanation": "The NEC does not specify a maximum distance from a sink for a dishwasher receptacle; it only needs to be accessible for the appliance."
      },
      {
        "id": "je-133",
        "question": "What is the minimum size copper conductor for a garbage disposal circuit?",
        "options": [
          "#16 AWG",
          "#14 AWG",
          "#12 AWG",
          "#10 AWG"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 210.3",
          "url": ""
        },
        "explanation": "Garbage disposals are typically connected to 15 or 20-amp circuits. Per NEC Table 210.3, #14 AWG is minimum for a 15-amp circuit."
      },
      {
        "id": "je-134",
        "question": "How many receptacles are required on a dwelling hallway 15 feet or longer?",
        "options": [
          "None required",
          "At least one",
          "At least two",
          "One every 6 feet"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 210.52(H)",
          "url": ""
        },
        "explanation": "Per NEC 210.52(H), in hallways of 10 feet or more in length, at least one receptacle outlet shall be installed."
      },
      {
        "id": "je-135",
        "question": "What is the general lighting load per square foot for an office building?",
        "options": [
          "2 VA",
          "3 VA",
          "3.5 VA",
          "5 VA"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 220.12",
          "url": ""
        },
        "explanation": "Per NEC Table 220.12, office buildings require 3.5 VA per square foot for general lighting load calculations."
      },
      {
        "id": "je-136",
        "question": "What is the general lighting load per square foot for a retail store?",
        "options": [
          "2 VA",
          "3 VA",
          "3.5 VA",
          "5 VA"
        ],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Table 220.12",
          "url": ""
        },
        "explanation": "Per NEC Table 220.12, stores require 2 VA per square foot for general lighting load calculations."
      },
      {
        "id": "je-137",
        "question": "What is the general lighting load per square foot for a warehouse?",
        "options": [
          "0.25 VA",
          "0.5 VA",
          "1 VA",
          "2 VA"
        ],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Table 220.12",
          "url": ""
        },
        "explanation": "Per NEC Table 220.12, warehouses require 0.25 VA per square foot for general lighting load calculations."
      },
      {
        "id": "je-138",
        "question": "What is the demand factor for four commercial clothes dryers?",
        "options": [
          "65%",
          "70%",
          "75%",
          "85%"
        ],
        "correct": 3,
        "source": {
          "name": "NEC 2023 Table 220.54",
          "url": ""
        },
        "explanation": "Per NEC Table 220.54, four dryers have a demand factor of 85%."
      },
      {
        "id": "je-139",
        "question": "What conductor temperature rating must be used when terminating on equipment rated for 60°C?",
        "options": [
          "60°C column",
          "75°C column",
          "90°C column",
          "Highest available"
        ],
        "correct": 0,
        "source": {
          "name": "NEC 2023 Article 110.14(C)",
          "url": ""
        },
        "explanation": "Per NEC 110.14(C), conductor ampacity shall be selected from the table column for the lowest temperature rating of any connected component."
      },
      {
        "id": "je-140",
        "question": "When can the 90°C ampacity column be used for conductor sizing?",
        "options": [
          "Always",
          "Never",
          "Only for derating calculations",
          "When all terminations are 90°C rated"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 110.14(C)",
          "url": ""
        },
        "explanation": "Per NEC 110.14(C), the 90°C ampacity can be used for ampacity adjustment (derating) calculations, but final ampacity is limited by termination temperature ratings."
      },
      {
        "id": "je-141",
        "question": "What is the maximum overcurrent protection for #12 AWG copper conductors?",
        "options": [
          "15 amps",
          "20 amps",
          "25 amps",
          "30 amps"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 240.4(D)",
          "url": ""
        },
        "explanation": "Per NEC 240.4(D), #12 AWG copper conductors shall be protected at not more than 20 amps."
      },
      {
        "id": "je-142",
        "question": "What is the maximum overcurrent protection for #10 AWG copper conductors?",
        "options": [
          "20 amps",
          "25 amps",
          "30 amps",
          "40 amps"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 240.4(D)",
          "url": ""
        },
        "explanation": "Per NEC 240.4(D), #10 AWG copper conductors shall be protected at not more than 30 amps."
      },
      {
        "id": "je-143",
        "question": "Outdoor receptacles for dwelling units must be GFCI protected at what height?",
        "options": [
          "Only at grade level",
          "Up to 6 feet 6 inches above grade",
          "At any height",
          "Only below 4 feet"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.8(A)(3)",
          "url": ""
        },
        "explanation": "Per NEC 210.8(A)(3), GFCI protection is required for all outdoor receptacles of dwelling units, regardless of height."
      },
      {
        "id": "je-144",
        "question": "What is the minimum size conductor for a 240V, 30-amp dryer circuit?",
        "options": [
          "#12 AWG",
          "#10 AWG",
          "#8 AWG",
          "#6 AWG"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Table 310.16",
          "url": ""
        },
        "explanation": "Per NEC Table 310.16, #10 AWG copper at 60°C has an ampacity of 30 amps, which is the minimum for a 30-amp dryer circuit."
      },
      {
        "id": "je-145",
        "question": "A receptacle behind a gas range can be installed at what maximum height?",
        "options": [
          "No specific maximum",
          "12 inches above countertop",
          "Behind range at any accessible height",
          "6 inches above range"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Article 210.52(C)(5)",
          "url": ""
        },
        "explanation": "The NEC permits receptacles for specific appliances like gas ranges to be located behind the appliance where accessible, without a specific maximum height."
      },
      {
        "id": "je-146",
        "question": "What is the minimum clearance from a pool for a receptacle supplying pool equipment?",
        "options": [
          "3 feet",
          "6 feet",
          "10 feet",
          "20 feet"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 680.22(A)(1)",
          "url": ""
        },
        "explanation": "Per NEC 680.22(A)(1), receptacles for pool pump motors shall be located between 6 feet and 20 feet from the inside walls of the pool."
      },
      {
        "id": "je-147",
        "question": "Underground wiring is not permitted within what distance of a pool?",
        "options": [
          "3 feet",
          "5 feet",
          "6 feet",
          "10 feet"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 680.10",
          "url": ""
        },
        "explanation": "Per NEC 680.10, underground wiring shall not be permitted under the pool or within 5 feet horizontally of the inside walls of the pool."
      },
      {
        "id": "je-148",
        "question": "Bonding of pool components is required for what purpose?",
        "options": [
          "To carry fault current",
          "To prevent shock from stray voltage",
          "To provide grounding",
          "All of the above"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 680.26",
          "url": ""
        },
        "explanation": "Per NEC 680.26, bonding creates an equipotential plane to reduce voltage gradients that could cause shock, not primarily for fault current."
      },
      {
        "id": "je-149",
        "question": "What is the minimum size solid copper bonding conductor for pools?",
        "options": [
          "#10 AWG",
          "#8 AWG",
          "#6 AWG",
          "#4 AWG"
        ],
        "correct": 1,
        "source": {
          "name": "NEC 2023 Article 680.26(B)(1)",
          "url": ""
        },
        "explanation": "Per NEC 680.26(B)(1), the bonding conductor shall be a minimum #8 AWG solid copper conductor."
      },
      {
        "id": "je-150",
        "question": "What is the volume allowance for each #14 AWG conductor in box fill calculations?",
        "options": [
          "1.50 cu in",
          "1.75 cu in",
          "2.00 cu in",
          "2.25 cu in"
        ],
        "correct": 2,
        "source": {
          "name": "NEC 2023 Table 314.16(B)",
          "url": ""
        },
        "explanation": "Per NEC Table 314.16(B), each #14 AWG conductor requires 2.00 cubic inches of box volume."
      }
    ],
    "glossary": {
      "ampacity": {
        "term": "Ampacity",
        "definition": "The maximum current, in amperes, that a conductor can carry continuously under conditions of use without exceeding its temperature rating.",
        "reference": "NEC Article 100",
        "url": ""
      },
      "branch circuit": {
        "term": "Branch Circuit",
        "definition": "The circuit conductors between the final overcurrent device protecting the circuit and the outlet(s). It distributes power from the panelboard to utilization equipment.",
        "reference": "NEC Article 100, Article 210",
        "url": ""
      },
      "circuit breaker": {
        "term": "Circuit Breaker",
        "definition": "A device designed to open and close a circuit by nonautomatic means and to open the circuit automatically on a predetermined overcurrent without damage to itself when properly applied within its rating.",
        "reference": "NEC Article 100",
        "url": ""
      },
      "conductor": {
        "term": "Conductor",
        "definition": "A material, usually in the form of a wire, cable, or bus bar, suitable for carrying an electric current. Copper and aluminum are the most common conductor materials.",
        "reference": "NEC Article 100",
        "url": ""
      },
      "conduit": {
        "term": "Conduit",
        "definition": "A raceway of circular cross section, such as EMT (Electrical Metallic Tubing), RMC (Rigid Metal Conduit), or PVC, used to protect and route electrical wiring.",
        "reference": "NEC Chapter 3",
        "url": ""
      },
      "dwelling unit": {
        "term": "Dwelling Unit",
        "definition": "A single unit providing complete and independent living facilities for one or more persons, including permanent provisions for living, sleeping, cooking, and sanitation.",
        "reference": "NEC Article 100",
        "url": ""
      },
      "emt": {
        "term": "EMT (Electrical Metallic Tubing)",
        "definition": "A thin-walled, unthreaded steel raceway used to protect and route electrical conductors. Also called thin-wall conduit. Connected using compression or set-screw fittings.",
        "reference": "NEC Article 358",
        "url": ""
      },
      "equipment grounding conductor": {
        "term": "Equipment Grounding Conductor (EGC)",
        "definition": "The conductive path that connects normally non-current-carrying metal parts of equipment to the system grounded conductor, the grounding electrode conductor, or both.",
        "reference": "NEC Article 100, Article 250.118",
        "url": ""
      },
      "feeder": {
        "term": "Feeder",
        "definition": "All circuit conductors between the service equipment, the source of a separately derived system, or other power supply source and the final branch-circuit overcurrent device.",
        "reference": "NEC Article 100, Article 215",
        "url": ""
      },
      "gfci": {
        "term": "GFCI (Ground-Fault Circuit Interrupter)",
        "definition": "A device intended for the protection of personnel that de-energizes a circuit when the current to ground exceeds a predetermined value (typically 5mA). Required in wet locations, bathrooms, kitchens, etc.",
        "reference": "NEC Article 100, Article 210.8",
        "url": ""
      },
      "afci": {
        "term": "AFCI (Arc-Fault Circuit Interrupter)",
        "definition": "A device intended to provide protection from the effects of arc faults by recognizing characteristics unique to arcing and de-energizing the circuit when an arc fault is detected.",
        "reference": "NEC Article 100, Article 210.12",
        "url": ""
      },
      "grounded conductor": {
        "term": "Grounded Conductor (Neutral)",
        "definition": "A system or circuit conductor that is intentionally grounded. In a typical residential system, this is the neutral conductor, identified by white or gray insulation.",
        "reference": "NEC Article 100, Article 200",
        "url": ""
      },
      "grounding electrode conductor": {
        "term": "Grounding Electrode Conductor (GEC)",
        "definition": "A conductor used to connect the system grounded conductor or the equipment to a grounding electrode or to a point on the grounding electrode system.",
        "reference": "NEC Article 100, Article 250.62",
        "url": ""
      },
      "overcurrent protection": {
        "term": "Overcurrent Protection",
        "definition": "A device such as a fuse or circuit breaker that opens a circuit when current exceeds a predetermined value, protecting conductors and equipment from damage.",
        "reference": "NEC Article 240",
        "url": ""
      },
      "panelboard": {
        "term": "Panelboard",
        "definition": "A single panel or group of panel units designed for assembly in the form of a single panel, including buses and automatic overcurrent devices.",
        "reference": "NEC Article 100, Article 408",
        "url": ""
      },
      "receptacle": {
        "term": "Receptacle",
        "definition": "A contact device installed at the outlet for the connection of an attachment plug. A single receptacle is a single contact device; a duplex receptacle has two contact devices.",
        "reference": "NEC Article 100, Article 406",
        "url": ""
      },
      "service": {
        "term": "Service",
        "definition": "The conductors and equipment for delivering electric energy from the serving utility to the wiring system of the premises served.",
        "reference": "NEC Article 100, Article 230",
        "url": ""
      },
      "voltage drop": {
        "term": "Voltage Drop",
        "definition": "The reduction in voltage in an electrical circuit between the source and load. NEC recommends no more than 3% drop for branch circuits and 5% total for feeders plus branch circuits.",
        "reference": "NEC Article 210.19(A) Informational Note",
        "url": ""
      },
      "working space": {
        "term": "Working Space",
        "definition": "Clear space required around electrical equipment for safe operation and maintenance. Minimum depth varies by voltage: 3 feet for 0-150V, 3.5 feet for 151-600V.",
        "reference": "NEC Article 110.26",
        "url": ""
      },
      "bonding": {
        "term": "Bonding",
        "definition": "The permanent joining of metallic parts to form an electrically conductive path that ensures electrical continuity and the capacity to conduct safely any current likely to be imposed.",
        "reference": "NEC Article 100, Article 250.90",
        "url": ""
      },
      "box fill": {
        "term": "Box Fill",
        "definition": "The calculation to determine if an electrical box has adequate volume for the conductors, devices, and fittings it contains. Each conductor size has a specified volume allowance.",
        "reference": "NEC Article 314.16",
        "url": ""
      },
      "full load current": {
        "term": "Full Load Current (FLC)",
        "definition": "The current required to produce full-load torque at the motor's rated speed. Used for sizing motor branch circuit conductors and overcurrent protection.",
        "reference": "NEC Article 430, Tables 430.248-430.250",
        "url": ""
      },
      "power factor": {
        "term": "Power Factor",
        "definition": "The ratio of real power (watts) to apparent power (volt-amperes) in an AC circuit. A power factor of 1.0 means voltage and current are in phase (purely resistive load).",
        "reference": "Electrical Theory",
        "url": ""
      },
      "resistance": {
        "term": "Resistance",
        "definition": "Opposition to current flow in a circuit, measured in ohms. Determined by conductor material, length, and cross-sectional area. Causes voltage drop and power dissipation as heat.",
        "reference": "Electrical Theory (Ohm's Law)",
        "url": ""
      },
      "small appliance circuit": {
        "term": "Small Appliance Circuit",
        "definition": "A 20-amp branch circuit required in kitchens, dining rooms, and similar areas to serve receptacle outlets for portable appliances. Minimum of two required per dwelling.",
        "reference": "NEC Article 210.52(B)",
        "url": ""
      },
      "awg": {
        "term": "AWG (American Wire Gauge)",
        "definition": "The standard system for measuring wire diameter in North America. Lower numbers indicate larger wire sizes. Common sizes: #14 (15A), #12 (20A), #10 (30A).",
        "reference": "NEC Chapter 9",
        "url": ""
      },
      "demand factor": {
        "term": "Demand Factor",
        "definition": "The ratio of the maximum demand of a system to the total connected load. Used in load calculations to account for the fact that not all loads operate simultaneously at full capacity.",
        "reference": "NEC Article 100",
        "url": ""
      },
      "service drop": {
        "term": "Service Drop",
        "definition": "The overhead conductors between the utility distribution system and the service point, typically the connection at the service entrance.",
        "reference": "NEC Article 100, Article 230",
        "url": ""
      },
      "service lateral": {
        "term": "Service Lateral",
        "definition": "The underground conductors between the utility distribution system and the service point, typically installed in conduit from a transformer to the meter base.",
        "reference": "NEC Article 100, Article 230",
        "url": ""
      },
      "raceway": {
        "term": "Raceway",
        "definition": "An enclosed channel designed for holding wires or cables, including conduit, tubing, wireways, and cable trays.",
        "reference": "NEC Article 100",
        "url": ""
      },
      "impedance": {
        "term": "Impedance",
        "definition": "The total opposition to current flow in an AC circuit, combining resistance and reactance. Measured in ohms. Z = √(R² + X²).",
        "reference": "Electrical Theory",
        "url": ""
      },
      "reactance": {
        "term": "Reactance",
        "definition": "Opposition to current flow in an AC circuit caused by inductance (XL) or capacitance (XC). Unlike resistance, reactance does not dissipate energy as heat.",
        "reference": "Electrical Theory",
        "url": ""
      },
      "inductance": {
        "term": "Inductance",
        "definition": "The property of a conductor that opposes changes in current flow, measured in henrys (H). Creates inductive reactance (XL = 2πfL) in AC circuits.",
        "reference": "Electrical Theory",
        "url": ""
      },
      "capacitance": {
        "term": "Capacitance",
        "definition": "The ability to store electrical charge, measured in farads (F). Creates capacitive reactance (XC = 1/2πfC) in AC circuits.",
        "reference": "Electrical Theory",
        "url": ""
      },
      "transformer": {
        "term": "Transformer",
        "definition": "A device that transfers electrical energy between circuits through electromagnetic induction, typically used to change voltage levels.",
        "reference": "NEC Article 450",
        "url": ""
      },
      "three-phase": {
        "term": "Three-Phase Power",
        "definition": "An AC power system using three conductors carrying currents 120 degrees apart. Provides more efficient power transmission and smoother motor operation than single-phase.",
        "reference": "Electrical Theory",
        "url": ""
      },
      "wye connection": {
        "term": "Wye (Star) Connection",
        "definition": "A three-phase connection where one end of each winding connects to a common point (neutral). Line voltage = Phase voltage × 1.732. Common configurations: 208Y/120V, 480Y/277V.",
        "reference": "Electrical Theory",
        "url": ""
      },
      "delta connection": {
        "term": "Delta Connection",
        "definition": "A three-phase connection where windings are connected end-to-end in a triangle. Line voltage equals phase voltage. No neutral point unless center-tapped.",
        "reference": "Electrical Theory",
        "url": ""
      },
      "high leg": {
        "term": "High Leg (Wild Leg)",
        "definition": "In a 4-wire delta system, the phase conductor with higher voltage to ground (approximately 208V in a 240V system). Must be identified with orange color per NEC 110.15.",
        "reference": "NEC Article 110.15",
        "url": ""
      },
      "motor starter": {
        "term": "Motor Starter",
        "definition": "A device that controls the starting and stopping of a motor, combining a contactor for switching with overload protection. Types include across-the-line, reduced voltage, and variable frequency drives.",
        "reference": "NEC Article 430",
        "url": ""
      },
      "locked rotor current": {
        "term": "Locked Rotor Current (LRC)",
        "definition": "The current drawn by a motor when the rotor is stationary (stalled). Typically 4-8 times full load current. Used for sizing motor branch circuit protection.",
        "reference": "NEC Article 430",
        "url": ""
      },
      "derating": {
        "term": "Derating (Ampacity Adjustment)",
        "definition": "Reducing the allowable ampacity of a conductor due to conditions such as elevated ambient temperature or multiple conductors in a raceway.",
        "reference": "NEC Article 310.15",
        "url": ""
      },
      "nm cable": {
        "term": "NM Cable (Romex)",
        "definition": "Nonmetallic-sheathed cable containing insulated conductors enclosed in a nonmetallic jacket. Common for residential branch circuit wiring. Not permitted in wet locations.",
        "reference": "NEC Article 334",
        "url": ""
      },
      "uf cable": {
        "term": "UF Cable (Underground Feeder)",
        "definition": "Underground feeder and branch circuit cable suitable for direct burial and wet locations. Similar to NM cable but with moisture-resistant construction.",
        "reference": "NEC Article 340",
        "url": ""
      },
      "rmc": {
        "term": "RMC (Rigid Metal Conduit)",
        "definition": "Heavy-wall threaded steel conduit providing maximum physical protection. Used in exposed locations, hazardous areas, and where additional protection is required.",
        "reference": "NEC Article 344",
        "url": ""
      },
      "imc": {
        "term": "IMC (Intermediate Metal Conduit)",
        "definition": "Medium-wall threaded steel conduit, lighter than RMC but heavier than EMT. Provides good physical protection with easier installation than RMC.",
        "reference": "NEC Article 342",
        "url": ""
      },
      "pvc conduit": {
        "term": "PVC Conduit",
        "definition": "Rigid nonmetallic conduit made of polyvinyl chloride. Corrosion-resistant and suitable for direct burial. Requires expansion fittings for long runs due to thermal expansion.",
        "reference": "NEC Article 352",
        "url": ""
      },
      "mc cable": {
        "term": "MC Cable (Metal-Clad)",
        "definition": "Factory assembly of insulated conductors in a flexible metallic armor. Permitted in most locations where NM cable is not allowed. The armor can serve as equipment grounding conductor in some types.",
        "reference": "NEC Article 330",
        "url": ""
      },
      "ac cable": {
        "term": "AC Cable (Armored Cable/BX)",
        "definition": "Factory assembly of insulated conductors in a flexible interlocked metal armor with an internal bonding strip. The armor serves as the equipment grounding conductor.",
        "reference": "NEC Article 320",
        "url": ""
      },
      "busway": {
        "term": "Busway",
        "definition": "A prefabricated electrical distribution system using enclosed busbars. Available in plug-in and feeder types. Used for high-capacity power distribution in commercial and industrial buildings.",
        "reference": "NEC Article 368",
        "url": ""
      },
      "in sight": {
        "term": "In Sight",
        "definition": "Visible and not more than 50 feet distant from the equipment. Used to define requirements for disconnect location from motors and other equipment.",
        "reference": "NEC Article 100",
        "url": ""
      },
      "readily accessible": {
        "term": "Readily Accessible",
        "definition": "Capable of being reached quickly for operation, renewal, or inspection without requiring tools or climbing over obstacles.",
        "reference": "NEC Article 100",
        "url": ""
      }
    }
  }
};

// ============================================================================
// Exam Management
// ============================================================================

const ExamManager = {
  // Get all exams (from localStorage with defaults)
  getAll() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EXAMS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading exams:', e);
    }
    // Return defaults
    return { ...DEFAULT_EXAMS };
  },

  // Save all exams
  saveAll(exams) {
    try {
      localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(exams));
    } catch (e) {
      console.error('Error saving exams:', e);
    }
  },

  // Get single exam by ID
  get(examId) {
    const exams = this.getAll();
    return exams[examId] || null;
  },

  // Save single exam
  save(exam) {
    const exams = this.getAll();
    exams[exam.id] = exam;
    this.saveAll(exams);
  },

  // Delete exam
  delete(examId) {
    const exams = this.getAll();
    delete exams[examId];
    this.saveAll(exams);

    // If deleted current exam, clear selection
    if (this.getCurrentId() === examId) {
      localStorage.removeItem(STORAGE_KEYS.CURRENT);
    }
  },

  // Get current exam ID
  getCurrentId() {
    return localStorage.getItem(STORAGE_KEYS.CURRENT) || 'journeyman-electrical';
  },

  // Set current exam ID
  setCurrentId(examId) {
    localStorage.setItem(STORAGE_KEYS.CURRENT, examId);
  },

  // Get current exam data
  getCurrent() {
    return this.get(this.getCurrentId());
  },

  // Create new exam
  create(name, description = '') {
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    const exam = {
      id,
      name,
      description,
      version: '1.0',
      passingScore: 70,
      timeLimit: 3600,
      questions: [],
      glossary: {}
    };
    this.save(exam);
    return exam;
  },

  // Reset exam to default (if exists in defaults)
  reset(examId) {
    if (DEFAULT_EXAMS[examId]) {
      this.save({ ...DEFAULT_EXAMS[examId] });
      return true;
    }
    return false;
  },

  // Export exam as JSON
  export(examId) {
    const exam = this.get(examId);
    if (!exam) return null;
    return JSON.stringify(exam, null, 2);
  },

  // Import exam from JSON
  import(jsonData) {
    try {
      const exam = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;

      // Validate required fields
      if (!exam.name) throw new Error('Missing exam name');
      if (!exam.id) {
        exam.id = exam.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      }
      if (!Array.isArray(exam.questions)) exam.questions = [];
      if (!exam.glossary || typeof exam.glossary !== 'object') exam.glossary = {};

      // Set defaults
      exam.passingScore = exam.passingScore || 70;
      exam.timeLimit = exam.timeLimit || 3600;
      exam.version = exam.version || '1.0';

      this.save(exam);
      return exam;
    } catch (e) {
      console.error('Import error:', e);
      throw new Error('Invalid exam data: ' + e.message);
    }
  },

  // Get list of all exam IDs and names
  list() {
    const exams = this.getAll();
    return Object.values(exams).map(e => ({
      id: e.id,
      name: e.name,
      description: e.description,
      questionCount: e.questions?.length || 0,
      glossaryCount: Object.keys(e.glossary || {}).length
    }));
  }
};

// ============================================================================
// App Object (for backward compatibility)
// ============================================================================

const App = {
  examData: null,
  currentExamId: null,

  async loadExamData(examId = null) {
    if (!examId) {
      examId = ExamManager.getCurrentId();
    }
    this.examData = ExamManager.get(examId);
    this.currentExamId = examId;
    ExamManager.setCurrentId(examId);
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

// ============================================================================
// Vocabulary/Glossary Functions
// ============================================================================

// Get current exam's glossary
function getCurrentGlossary() {
  const exam = ExamManager.getCurrent();
  return exam?.glossary || {};
}

// Get sorted glossary terms for matching (longest first)
function getGlossaryTerms() {
  const glossary = getCurrentGlossary();
  return Object.keys(glossary).sort((a, b) => b.length - a.length);
}

// Highlight vocabulary terms in text
function highlightVocabTerms(text) {
  const glossary = getCurrentGlossary();
  const terms = getGlossaryTerms();

  if (terms.length === 0) return text;

  let result = text;
  const matched = new Set();

  for (const termKey of terms) {
    const regex = new RegExp(`\\b(${termKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
    result = result.replace(regex, (match) => {
      const lowerMatch = match.toLowerCase();
      if (matched.has(lowerMatch)) return match;
      matched.add(lowerMatch);
      return `<span class="vocab-term" data-term="${termKey}" tabindex="0">${match}</span>`;
    });
  }

  return result;
}

// Show vocabulary definition panel
function showVocabDefinition(termKey) {
  const glossary = getCurrentGlossary();
  const term = glossary[termKey];
  if (!term) return;

  hideVocabDefinition();

  document.querySelectorAll('.vocab-term').forEach(el => el.classList.remove('active'));
  const activeTerm = document.querySelector(`.vocab-term[data-term="${termKey}"]`);
  if (activeTerm) activeTerm.classList.add('active');

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

  const feedback = document.getElementById('feedback');
  const questionText = document.querySelector('.question-text');
  const insertAfter = (feedback && feedback.classList.contains('show')) ? feedback : questionText;

  if (insertAfter) {
    insertAfter.parentNode.insertBefore(panel, insertAfter.nextSibling);
  }

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
      e.stopPropagation();
      showVocabDefinition(term.dataset.term);
    } else if (!e.target.closest('.vocab-panel')) {
      hideVocabDefinition();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('vocab-term')) {
      e.preventDefault();
      showVocabDefinition(e.target.dataset.term);
    } else if (e.key === 'Escape') {
      hideVocabDefinition();
    }
  });
}

// ============================================================================
// Question Rendering
// ============================================================================

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function renderQuestion(question, questionIndex, totalQuestions, containerId = 'question-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

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

  hideVocabDefinition();
}

function showFeedback(isCorrect, question, selectedIndex) {
  const feedback = document.getElementById('feedback');
  if (!feedback) return;

  hideVocabDefinition();

  feedback.className = `feedback show ${isCorrect ? 'correct' : 'incorrect'}`;

  const sourceLink = question.source?.url
    ? `<a href="${question.source.url}" target="_blank" rel="noopener">${question.source.name}</a>`
    : question.source?.name || 'General knowledge';

  const highlightedExplanation = highlightVocabTerms(question.explanation);

  feedback.innerHTML = `
    <div class="feedback-header">${isCorrect ? 'Correct!' : 'Incorrect'}</div>
    <p class="feedback-explanation">${highlightedExplanation}</p>
    <p class="feedback-source">Source: ${sourceLink}</p>
  `;

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

function initOptionKeyboardNav(onSelect) {
  document.addEventListener('keydown', (e) => {
    const options = document.querySelectorAll('.option:not(.disabled)');
    if (options.length === 0) return;

    const key = e.key.toUpperCase();
    const letterIndex = LETTERS.indexOf(key);
    if (letterIndex !== -1 && letterIndex < options.length) {
      e.preventDefault();
      onSelect(letterIndex);
    }
  });
}
