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
    ,
      {"id":"je-151", "question":"According to the NEC, what does 'accessible (as applied to equipment)' mean?", "options":["Capable of being reached quickly without tools", "Capable of being reached for operation, renewal, and inspection", "Located within 6 feet of the floor", "Visible from the entrance"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, 'accessible (as applied to equipment)' means capable of being reached for operation, renewal, and inspection."},
      {"id":"je-152", "question":"What does 'readily accessible' mean per the NEC?", "options":["Within reach without tools or climbing", "Capable of being reached quickly without using tools (other than keys), climbing over obstacles, or using ladders", "Accessible with a key", "Located at eye level"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, 'readily accessible' means capable of being reached quickly for operation, renewal, or inspection without requiring tools (other than keys), climbing, or using ladders."},
      {"id":"je-153", "question":"What is the definition of 'ampacity' according to the NEC?", "options":["The maximum voltage a conductor can handle", "The maximum current a conductor can carry continuously under conditions of use without exceeding its temperature rating", "The resistance of a conductor", "The size of a conductor in AWG"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, ampacity is the maximum current, in amperes, that a conductor can carry continuously under the conditions of use without exceeding its temperature rating."},
      {"id":"je-154", "question":"What is the NEC definition of 'approved'?", "options":["Listed by a testing laboratory", "Acceptable to the authority having jurisdiction", "Meets all code requirements", "Manufactured to NEMA standards"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, 'approved' means acceptable to the authority having jurisdiction (AHJ)."},
      {"id":"je-155", "question":"An arc-fault circuit interrupter (AFCI) is designed to provide protection from what?", "options":["Ground faults", "Overcurrent conditions", "Effects of arc faults by recognizing characteristics unique to arcing", "Short circuits only"], "correct":2, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, an AFCI is a device intended to provide protection from the effects of arc faults by recognizing characteristics unique to arcing and functioning to de-energize the circuit when an arc fault is detected."},
      {"id":"je-156", "question":"What constitutes a 'bathroom' per the NEC definition?", "options":["Any room with a toilet", "An area including a sink with one or more of the following: toilet, urinal, tub, shower, bidet, or similar plumbing fixtures", "A room with running water", "Any area where personal hygiene occurs"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, a bathroom is an area including a sink with one or more of the following: a toilet, a urinal, a tub, a shower, a bidet, or similar plumbing fixtures."},
      {"id":"je-157", "question":"What does 'bonded (bonding)' mean according to the NEC?", "options":["Welded together", "Connected to establish electrical continuity and conductivity", "Glued with an approved adhesive", "Mechanically fastened"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, 'bonded (bonding)' means connected to establish electrical continuity and conductivity."},
      {"id":"je-158", "question":"What is the purpose of a bonding conductor or bonding jumper?", "options":["To carry fault current to the utility", "To ensure the required electrical conductivity between metal parts required to be electrically connected", "To provide a path for neutral current", "To connect the grounding electrode to earth"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, a bonding conductor (bonding jumper) is a conductor that ensures the required electrical conductivity between metal parts that are required to be electrically connected."},
      {"id":"je-159", "question":"Each multiwire branch circuit must have a means to do what to all ungrounded conductors?", "options":["Ground them", "Simultaneously disconnect them at the origin point", "Identify them", "Connect them to separate panels"], "correct":1, "source":{"name":"NEC 2026 Article 210.4(B)", "url":""}, "explanation":"Per NEC 210.4(B), each multiwire branch circuit shall be provided with a means that will simultaneously disconnect all ungrounded conductors at the point where the branch circuit originates."},
      {"id":"je-160", "question":"What loads can multiwire branch circuits supply according to 210.4(C)?", "options":["Any loads", "Line-to-neutral loads only, with limited exceptions", "Line-to-line loads only", "Single-phase loads only"], "correct":1, "source":{"name":"NEC 2026 Article 210.4(C)", "url":""}, "explanation":"Per NEC 210.4(C), multiwire branch circuits shall supply only line-to-neutral loads, with exceptions for equipment with line-to-line loads when all ungrounded conductors are opened simultaneously."},
      {"id":"je-161", "question":"In dwelling units, what is the maximum voltage permitted between conductors supplying luminaires?", "options":["208 volts", "240 volts", "120 volts", "277 volts"], "correct":2, "source":{"name":"NEC 2026 Article 210.6(A)", "url":""}, "explanation":"Per NEC 210.6(A), in dwelling units and guest rooms, the voltage shall not exceed 120 volts, nominal, between conductors that supply the terminals of luminaires."},
      {"id":"je-162", "question":"Where is GFCI protection required in dwelling unit garages?", "options":["Only near water sources", "For all 125-250V receptacles supplied by single-phase branch circuits rated 150V or less to ground", "Only for receptacles below 6 feet", "Not required in garages"], "correct":1, "source":{"name":"NEC 2026 Article 210.8(A)(2)", "url":""}, "explanation":"Per NEC 210.8(A)(2), GFCI protection is required for all 125-250V receptacles in garages supplied by single-phase branch circuits rated 150 volts or less to ground."},
      {"id":"je-163", "question":"GFCI protection is required for receptacles in crawl spaces at or below grade level. What is the purpose?", "options":["To prevent fires", "To protect personnel from electric shock in potentially wet locations", "To prevent overcurrent", "To meet ADA requirements"], "correct":1, "source":{"name":"NEC 2026 Article 210.8(A)(5)", "url":""}, "explanation":"Per NEC 210.8(A), GFCI protection is required in crawl spaces at or below grade level to protect personnel from electric shock hazards in potentially damp environments."},
      {"id":"je-164", "question":"GFCI protection is required for receptacles within what distance from the top inside edge of a sink?", "options":["3 feet", "4 feet", "6 feet", "8 feet"], "correct":2, "source":{"name":"NEC 2026 Article 210.8(A)(9)", "url":""}, "explanation":"Per NEC 210.8(A)(9), GFCI protection is required where receptacles are installed within 6 feet (1.8m) from the top inside edge of the bowl of the sink."},
      {"id":"je-165", "question":"GFCI protection is required for receptacles within what distance from a bathtub or shower stall?", "options":["3 feet", "4 feet", "6 feet", "10 feet"], "correct":2, "source":{"name":"NEC 2026 Article 210.8(A)(11)", "url":""}, "explanation":"Per NEC 210.8(A)(11), GFCI protection is required where receptacles are installed within 6 feet (1.8m) of the outside edge of the bathtub or shower stall."},
      {"id":"je-166", "question":"GFCI protection is now required in which area of dwelling units according to NEC 2026?", "options":["Bedrooms", "Attics", "Laundry areas", "Closets"], "correct":2, "source":{"name":"NEC 2026 Article 210.8(A)(12)", "url":""}, "explanation":"Per NEC 210.8(A)(12), GFCI protection is required for receptacles in laundry areas of dwelling units."},
      {"id":"je-167", "question":"What is the primary purpose of system grounding per NEC 250.4(A)(1)?", "options":["To prevent fires", "To limit voltage from lightning, line surges, or unintentional contact with higher-voltage lines and stabilize voltage to earth", "To provide a return path for current", "To protect against theft"], "correct":1, "source":{"name":"NEC 2026 Article 250.4(A)(1)", "url":""}, "explanation":"Per NEC 250.4(A)(1), electrical systems that are grounded shall be connected to earth so that voltage imposed by lightning, line surges, or unintentional contact with higher-voltage lines is limited and voltage to earth is stabilized during normal operation."},
      {"id":"je-168", "question":"Can the earth be considered as an effective ground-fault current path?", "options":["Yes, if soil resistivity is low", "Yes, with proper grounding electrodes", "No, the earth shall not be considered an effective ground-fault current path", "Only for systems under 600V"], "correct":2, "source":{"name":"NEC 2026 Article 250.4(A)(5)", "url":""}, "explanation":"Per NEC 250.4(A)(5)(c), the earth shall not be considered as an effective ground-fault current path."},
      {"id":"je-169", "question":"What connection method is NOT permitted for grounding and bonding equipment per NEC 250.8(B)?", "options":["Listed pressure connectors", "Exothermic welding", "Connection devices depending solely on solder", "Thread-forming machine screws"], "correct":2, "source":{"name":"NEC 2026 Article 250.8(B)", "url":""}, "explanation":"Per NEC 250.8(B), connection devices or fittings that depend solely on solder shall not be used for grounding and bonding connections."},
      {"id":"je-170", "question":"Nonconductive coatings on equipment to be grounded must be removed from what areas?", "options":["The entire equipment", "Only the nameplate area", "Threads and other contact surfaces to ensure electrical continuity", "Only visible surfaces"], "correct":2, "source":{"name":"NEC 2026 Article 250.12", "url":""}, "explanation":"Per NEC 250.12, nonconductive coatings (such as paint, lacquer, and enamel) on equipment to be grounded shall be removed from threads and other contact surfaces to ensure electrical continuity."},
      {"id":"je-171", "question":"An AC system of less than 50 volts must be grounded if the transformer supply system exceeds what voltage to ground?", "options":["50 volts", "120 volts", "150 volts", "240 volts"], "correct":2, "source":{"name":"NEC 2026 Article 250.20(A)(1)", "url":""}, "explanation":"Per NEC 250.20(A)(1), AC systems of less than 50 volts shall be grounded if supplied by transformers and the transformer supply system exceeds 150 volts to ground."},
      {"id":"je-172", "question":"What is required for ungrounded AC systems operating at 120 volts or more and 1000 volts or less?", "options":["GFCI protection", "Ground detectors shall be installed", "Double insulation", "Arc-fault protection"], "correct":1, "source":{"name":"NEC 2026 Article 250.21(B)", "url":""}, "explanation":"Per NEC 250.21(B)(1), ungrounded AC systems operating at not less than 120 volts and at 1000 volts or less shall have ground detectors installed on the system."},
      {"id":"je-173", "question":"Ungrounded systems must be marked with what warning?", "options":["'High Voltage'", "'Caution: Ungrounded System Operating — ___ Volts Between Conductors'", "'Danger: Do Not Touch'", "'Warning: No Ground'"], "correct":1, "source":{"name":"NEC 2026 Article 250.21(C)", "url":""}, "explanation":"Per NEC 250.21(C), ungrounded systems shall be legibly marked 'Caution: Ungrounded System Operating — ___ Volts Between Conductors' at the source or first disconnecting means."},
      {"id":"je-174", "question":"Where must the grounding electrode conductor be connected for a service-supplied AC system?", "options":["At the meter base only", "At the service disconnecting means only", "At any accessible point from the load end of the service conductors to the service disconnecting means", "At the grounding electrode only"], "correct":2, "source":{"name":"NEC 2026 Article 250.24(A)(1)", "url":""}, "explanation":"Per NEC 250.24(A)(1), the grounding electrode conductor connection shall be made at any accessible point from the load end of the service conductors to the terminal or bus to which the grounded service conductor is connected at the service disconnecting means."},
      {"id":"je-175", "question":"Type NM cable is permitted for use in which type of building construction?", "options":["Type I and II only", "Types III, IV, and V", "Type I only", "All construction types without restriction"], "correct":1, "source":{"name":"NEC 2026 Article 334.10", "url":""}, "explanation":"Per NEC 334.10, Type NM and Type NMC cables are permitted in one- and two-family dwellings and multifamily dwellings of Types III, IV, and V construction."},
      {"id":"je-176", "question":"Type NM cable is NOT permitted to be used in which location?", "options":["Dry locations", "Dwelling unit attics", "Wet or damp locations", "Concealed in walls"], "correct":2, "source":{"name":"NEC 2026 Article 334.12(A)(4)", "url":""}, "explanation":"Per NEC 334.12(A)(4), Type NM cables shall not be used in wet or damp locations."},
      {"id":"je-177", "question":"Type NM cable passing through a floor must be enclosed in protection extending at least how high above the floor?", "options":["3 inches", "6 inches", "12 inches", "18 inches"], "correct":1, "source":{"name":"NEC 2026 Article 334.15(B)", "url":""}, "explanation":"Per NEC 334.15(B), where passing through a floor, Type NM cable shall be enclosed in protection extending at least 6 inches (150mm) above the floor."},
      {"id":"je-178", "question":"What is the minimum bending radius for Type NM cable?", "options":["3 times the cable diameter", "5 times the cable diameter", "7 times the cable diameter", "10 times the cable diameter"], "correct":1, "source":{"name":"NEC 2026 Article 334.24", "url":""}, "explanation":"Per NEC 334.24, the radius of the curve of the inner edge of any bend during or after installation shall not be less than five times the diameter of the cable."},
      {"id":"je-179", "question":"Type NM cable must be secured within what distance of every cable entry into an enclosure?", "options":["6 inches", "12 inches", "18 inches", "24 inches"], "correct":1, "source":{"name":"NEC 2026 Article 334.30", "url":""}, "explanation":"Per NEC 334.30, nonmetallic-sheathed cable shall be secured within 300mm (12 inches) of every cable entry into enclosures such as outlet boxes, junction boxes, cabinets, or fittings."},
      {"id":"je-180", "question":"Type NM cable must be supported at intervals not exceeding what distance?", "options":["3 feet", "4 feet", "4-1/2 feet", "6 feet"], "correct":2, "source":{"name":"NEC 2026 Article 334.30", "url":""}, "explanation":"Per NEC 334.30, nonmetallic-sheathed cable shall be supported at intervals not exceeding 1.4m (4-1/2 feet)."},
      {"id":"je-181", "question":"The 90°C rating of Type NM cable conductors can be used for what purpose?", "options":["Determining the ampacity directly", "Ampacity adjustment and correction calculations only, with final ampacity not exceeding 60°C rating", "Sizing overcurrent protection", "All calculations"], "correct":1, "source":{"name":"NEC 2026 Article 334.80", "url":""}, "explanation":"Per NEC 334.80, the 90°C (194°F) rating of NM cable conductors may be used for ampacity adjustment and correction calculations, provided the final calculated ampacity does not exceed that of a 60°C rated conductor."},
      {"id":"je-182", "question":"For general motor applications, what values are used to determine conductor ampacity?", "options":["Motor nameplate values only", "Values from NEC Tables 430.247-430.250 instead of nameplate values", "Calculated values", "Manufacturer specifications only"], "correct":1, "source":{"name":"NEC 2026 Article 430.6(A)(1)", "url":""}, "explanation":"Per NEC 430.6(A)(1), values given in Tables 430.247-430.250 shall be used instead of the actual current rating marked on the motor nameplate to determine conductor ampacity, switch ratings, and branch-circuit protection."},
      {"id":"je-183", "question":"What motor nameplate information is used to determine separate motor overload protection?", "options":["Table values from NEC Chapter 9", "The motor nameplate current ratings", "Calculated locked-rotor current", "Manufacturer recommendations only"], "correct":1, "source":{"name":"NEC 2026 Article 430.6(A)(2)", "url":""}, "explanation":"Per NEC 430.6(A)(2), the motor nameplate current ratings shall be used to determine the values for separate motor overload protection."},
      {"id":"je-184", "question":"Code letters on motor nameplates indicate what characteristic?", "options":["Motor efficiency rating", "Motor input with locked rotor (kVA per horsepower)", "Motor service factor", "Motor temperature rating"], "correct":1, "source":{"name":"NEC 2026 Article 430.7(B)", "url":""}, "explanation":"Per NEC 430.7(B), code letters marked on motor nameplates show motor input with locked rotor in kilovolt-amperes per horsepower."},
      {"id":"je-185", "question":"A motor controller must be marked with the manufacturer's name, voltage, current or horsepower rating, and what else?", "options":["Color code", "Short-circuit current rating", "Installation date", "Warranty information"], "correct":1, "source":{"name":"NEC 2026 Article 430.8", "url":""}, "explanation":"Per NEC 430.8, a motor controller shall be marked with the manufacturer's name or identification, the voltage, the current or horsepower rating, the short-circuit current rating, and other necessary data."},
      {"id":"je-186", "question":"Article 517 applies to electrical installations in what type of facilities?", "options":["Industrial plants", "Health care facilities that provide services to human beings", "Agricultural buildings", "Commercial offices"], "correct":1, "source":{"name":"NEC 2026 Article 517.1", "url":""}, "explanation":"Per NEC 517.1, Article 517 applies to electrical construction and installation criteria in health care facilities that provide services to human beings."},
      {"id":"je-187", "question":"In health care patient care spaces, what type of wiring method provides an effective ground-fault current path?", "options":["Type NM cable", "Metal raceway system, or cable with metallic armor or sheath that qualifies as an equipment grounding conductor", "Flexible cord only", "Any wiring method"], "correct":1, "source":{"name":"NEC 2026 Article 517.13(A)", "url":""}, "explanation":"Per NEC 517.13(A), branch circuits serving patient care spaces shall be provided with an effective ground-fault current path by installation in a metal raceway system or a cable having a metallic armor or sheath assembly that qualifies as an equipment grounding conductor."},
      {"id":"je-188", "question":"In patient care spaces, what size insulated copper conductor is required to connect equipment grounding terminal buses of normal and essential branch-circuit panelboards?", "options":["12 AWG", "10 AWG", "8 AWG", "6 AWG"], "correct":1, "source":{"name":"NEC 2026 Article 517.14", "url":""}, "explanation":"Per NEC 517.14, the equipment grounding terminal buses of normal and essential branch-circuit panelboards serving the same individual patient care vicinity shall be connected together with an insulated continuous copper conductor not smaller than 10 AWG."},
      {"id":"je-189", "question":"Are isolated ground receptacles permitted within the patient care vicinity?", "options":["Yes, with special listing", "Yes, if hospital grade", "No, isolated ground receptacles shall not be installed within a patient care vicinity", "Only in critical care areas"], "correct":2, "source":{"name":"NEC 2026 Article 517.16(A)", "url":""}, "explanation":"Per NEC 517.16(A), an isolated ground receptacle shall not be installed within a patient care vicinity."},
      {"id":"je-190", "question":"When is a second level of ground-fault protection of equipment (GFPE) required in health care facilities?", "options":["Always", "When GFPE is applied at the service supplying the facility", "Only for emergency circuits", "Never in health care facilities"], "correct":1, "source":{"name":"NEC 2026 Article 517.17", "url":""}, "explanation":"Per NEC 517.17, if ground-fault protection of equipment (GFPE) is applied to the service supplying a health care facility with Category 1 spaces, an additional level of ground-fault protection is required downstream."},
      {"id":"je-191", "question":"What is the minimum overhead conductor clearance from the water level of a swimming pool for 0-15kV conductors?", "options":["10 feet", "14.5 feet", "22.5 feet", "25 feet"], "correct":3, "source":{"name":"NEC 2026 Article 680.9(A), Table 680.9(A)", "url":""}, "explanation":"Per NEC Table 680.9(A), for conductors 0 through 15kV, the minimum clearance in any direction to the water level or edge of water surface is 25 feet (7.5m)."},
      {"id":"je-192", "question":"What is the horizontal limit of clearance from the inside wall of a pool for overhead conductors?", "options":["5 feet", "10 feet minimum, extending to outer edge of diving structures", "15 feet", "20 feet"], "correct":1, "source":{"name":"NEC 2026 Article 680.9(A), Table 680.9(A)", "url":""}, "explanation":"Per NEC Table 680.9(A), the horizontal limit of clearance measured from inside wall of the pool shall extend to the outer edge of structures but not less than 10 feet (3m)."},
      {"id":"je-193", "question":"Underground wiring within what horizontal distance from the inside wall of a pool is permitted?", "options":["Not permitted", "5 feet", "10 feet", "15 feet"], "correct":1, "source":{"name":"NEC 2026 Article 680.11(A)", "url":""}, "explanation":"Per NEC 680.11(A), underground wiring within 5 feet (1.5m) horizontally from the inside wall of the pool is permitted using approved wiring methods."},
      {"id":"je-194", "question":"Pool maintenance disconnecting means must be located not less than what distance horizontally from the inside walls of a pool?", "options":["3 feet", "5 feet", "6 feet", "10 feet"], "correct":1, "source":{"name":"NEC 2026 Article 680.13", "url":""}, "explanation":"Per NEC 680.13, the maintenance disconnecting means shall be located not less than 5 feet (1.5m) horizontally from the inside walls of a pool, spa, fountain, or hot tub unless separated by a permanent barrier."},
      {"id":"je-195", "question":"What wiring method is NOT considered suitable for corrosive pool environments?", "options":["Rigid PVC conduit", "Liquidtight flexible nonmetallic conduit", "Aluminum conduit", "Rigid metal conduit"], "correct":2, "source":{"name":"NEC 2026 Article 680.14(A)", "url":""}, "explanation":"Per NEC 680.14(A), aluminum conduit and tubing wiring methods shall not be permitted in corrosive pool environments."},
      {"id":"je-196", "question":"For a permanently installed pool, the maximum length for a flexible cord connecting fixed equipment is what?", "options":["18 inches", "3 feet", "6 feet", "10 feet"], "correct":1, "source":{"name":"NEC 2026 Article 680.8(A)", "url":""}, "explanation":"Per NEC 680.8(A), for other than storable pools, the flexible cord connecting fixed or stationary equipment shall not exceed 3 feet (900mm) in length."},
      {"id":"je-197", "question":"Feeders and branch circuits in a corrosive pool environment must contain an EGC that is what?", "options":["Any grounding conductor", "Bare copper", "Insulated copper conductor not smaller than 12 AWG", "Aluminum minimum 10 AWG"], "correct":2, "source":{"name":"NEC 2026 Article 680.7(A)", "url":""}, "explanation":"Per NEC 680.7(A), feeders and branch circuits installed in a corrosive environment or wet location shall contain an EGC that is an insulated copper conductor sized per Table 250.122, but not smaller than 12 AWG."},
      {"id":"je-198", "question":"Article 700 applies to what type of electrical systems?", "options":["Optional standby systems", "Legally required standby systems", "Emergency systems for illumination, power, or both when the normal supply is interrupted", "All backup power systems"], "correct":2, "source":{"name":"NEC 2026 Article 700.1", "url":""}, "explanation":"Per NEC 700.1, Article 700 applies to the electrical safety of emergency systems consisting of circuits and equipment intended to supply, distribute, and control electricity for illumination, power, or both when the normal electrical supply is interrupted."},
      {"id":"je-199", "question":"Reconditioned transfer switches are permitted to be installed in emergency systems. True or False?", "options":["True, if inspected", "True, if listed", "False, reconditioned transfer switches shall not be installed", "True, with AHJ approval"], "correct":2, "source":{"name":"NEC 2026 Article 700.3", "url":""}, "explanation":"Per NEC 700.3, reconditioned transfer switches shall not be installed in emergency systems."},
      {"id":"je-200", "question":"Emergency system equipment must be maintained in accordance with what?", "options":["Local codes only", "Manufacturer instructions and industry standards", "Utility company requirements", "Insurance requirements only"], "correct":1, "source":{"name":"NEC 2026 Article 700.4(C)", "url":""}, "explanation":"Per NEC 700.4(C), emergency system equipment shall be maintained in accordance with manufacturer instructions and industry standards."},
      {"id":"je-201", "question":"If an emergency system relies on a single alternate source, what must be provided for maintenance of that source?", "options":["Battery backup", "Permanent switching means to connect a portable or temporary alternate source", "Manual bypass only", "No special provisions required"], "correct":1, "source":{"name":"NEC 2026 Article 700.4(F)", "url":""}, "explanation":"Per NEC 700.4(F), if the emergency system relies on a single alternate source of power that will be disabled for maintenance, the system shall include permanent switching means to connect a portable or temporary alternate source."},
      {"id":"je-202", "question":"Emergency system load management must prioritize what type of circuits first?", "options":["Optional standby circuits", "Legally required standby circuits", "Emergency circuits", "HVAC circuits"], "correct":2, "source":{"name":"NEC 2026 Article 700.5(C)", "url":""}, "explanation":"Per NEC 700.5(C), selective load management shall ensure adequate power to circuits in this order of priority: (1) Emergency circuits, (2) Legally required standby circuits, (3) Optional standby circuits."},
      {"id":"je-203", "question":"Automatic transfer switches for emergency systems must be what?", "options":["Manually operated", "Electrically operated and mechanically held", "Spring-loaded", "Gravity operated"], "correct":1, "source":{"name":"NEC 2026 Article 700.6(B)", "url":""}, "explanation":"Per NEC 700.6(B), automatic transfer switches shall be electrically operated and mechanically held."},
      {"id":"je-204", "question":"Transfer equipment for emergency systems can supply what type of loads?", "options":["Any loads", "Emergency loads only", "Emergency and legally required standby loads", "All critical loads"], "correct":1, "source":{"name":"NEC 2026 Article 700.6(D)", "url":""}, "explanation":"Per NEC 700.6(D), transfer equipment shall supply only emergency loads."},
      {"id":"je-205", "question":"What must be field marked on the exterior of emergency system transfer equipment?", "options":["Installation date", "The short-circuit current rating based on the specific OCPD protecting it", "Serial number", "Installer name"], "correct":1, "source":{"name":"NEC 2026 Article 700.6(E)", "url":""}, "explanation":"Per NEC 700.6(E), the short-circuit current rating of the transfer equipment, based on the specific overcurrent protective device type and settings protecting the transfer equipment, shall be field marked on the exterior."},
      {"id":"je-206", "question":"According to NEC Article 100, what does 'automatic' mean?", "options":["Computer controlled", "Performing a function without the necessity of human intervention", "Battery powered", "Self-testing"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, 'automatic' means performing a function without the necessity of human intervention."},
      {"id":"je-207", "question":"What is the NEC definition of an 'appliance'?", "options":["Any electrical device", "Utilization equipment, generally other than industrial, that is fastened in place or portable and built in standardized sizes to perform one or more functions", "Equipment over 600 volts", "Any cord-connected device"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, an appliance is utilization equipment, generally other than industrial, that is fastened in place, stationary, or portable; is normally built in a standardized size or type; and is installed or connected as a unit to perform one or more functions."},
      {"id":"je-208", "question":"What is the definition of 'authority having jurisdiction (AHJ)'?", "options":["The electrical contractor", "An organization, office, or individual responsible for enforcing code requirements or approving equipment", "The utility company", "The building owner"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, the authority having jurisdiction (AHJ) is an organization, office, or individual responsible for enforcing the requirements of a code or standard, or for approving equipment, materials, an installation, or a procedure."},
      {"id":"je-209", "question":"What is the NEC definition of a 'battery'?", "options":["A device that stores chemical energy", "A single cell or a group of cells connected together electrically in series, parallel, or both", "A backup power source only", "A rechargeable energy storage device only"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, a battery is a single cell or a group of cells connected together electrically in series, in parallel, or a combination of both."},
      {"id":"je-210", "question":"What is a 'grounding electrode bonding conductor'?", "options":["The conductor connecting equipment to the grounding electrode", "A conductor, other than the grounding electrode conductor, used to interconnect two or more grounding electrodes to form the grounding electrode system", "The main bonding jumper", "A conductor connecting the neutral to ground"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, a grounding electrode bonding conductor is a conductor, other than the grounding electrode conductor, used to interconnect two or more grounding electrodes to form the grounding electrode system."},
      {"id":"je-211", "question":"What is the purpose of a 'main bonding jumper'?", "options":["To connect building steel to the grounding electrode", "To provide the connection between the grounded circuit conductor and the equipment grounding conductor at the service", "To bond water pipes to the electrical system", "To connect multiple grounding electrodes"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, a main bonding jumper is a component of the effective ground-fault current path that is the connection between the grounded circuit conductor and the equipment grounding conductor, or the supply-side bonding conductor, or both, at the service equipment."},
      {"id":"je-212", "question":"What is a 'supply-side bonding jumper'?", "options":["A jumper on the utility side of the meter", "A conductor installed on the supply side of a service or within service equipment that ensures electrical conductivity between metal parts", "A bonding jumper at the transformer", "A conductor connecting two services"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, a supply-side bonding jumper is a component of the effective ground-fault current path installed on the supply side of a service or within a service equipment enclosure(s) that ensures the required electrical conductivity between metal parts."},
      {"id":"je-213", "question":"Per NEC 210.8, how is the distance from receptacles measured for GFCI requirements?", "options":["Straight line distance", "As the shortest path the power supply cord would follow without piercing a floor, wall, ceiling, or fixed barrier", "Along the floor only", "Through walls and floors"], "correct":1, "source":{"name":"NEC 2026 Article 210.8", "url":""}, "explanation":"Per NEC 210.8, for GFCI requirements, the distance from receptacles shall be measured as the shortest path the power supply cord connected to the receptacle would follow without piercing a floor, wall, ceiling, or fixed barrier."},
      {"id":"je-214", "question":"GFCI-protected receptacles must be installed in what location?", "options":["In any accessible location", "In a readily accessible location", "Only at eye level", "Only at floor level"], "correct":1, "source":{"name":"NEC 2026 Article 210.8", "url":""}, "explanation":"Per NEC 210.8, the GFCI shall be installed in a readily accessible location."},
      {"id":"je-215", "question":"GFCI protection is NOT required for receptacles supplying only what type of system?", "options":["HVAC equipment", "Permanently installed premises security system", "Garage door openers", "Pool pumps"], "correct":1, "source":{"name":"NEC 2026 Article 210.8(A) Exception 2", "url":""}, "explanation":"Per NEC 210.8(A) Exception 2, GFCI protection shall not be required for a receptacle supplying only a permanently installed premises security system."},
      {"id":"je-216", "question":"In a 3-phase, 4-wire, delta-connected system with a midpoint grounded, what color must identify the high-leg conductor?", "options":["Red", "Black", "Orange", "Blue"], "correct":2, "source":{"name":"NEC 2026 Article 110.15", "url":""}, "explanation":"Per NEC 110.15, the phase conductor with the higher voltage to ground must be permanently marked with an outer finish that is orange or marked orange with another effective marking."},
      {"id":"je-217", "question":"The high leg in a delta-connected system must be located in what phase position in panelboards?", "options":["A phase", "B phase", "C phase", "Any phase"], "correct":1, "source":{"name":"NEC 2026 Article 408.10(E)(1)", "url":""}, "explanation":"Per NEC 408.10(E)(1), the high leg in delta-connected systems shall be on the B phase."},
      {"id":"je-218", "question":"What is the purpose of performing alterations to stop objectionable current per NEC 250.6(B)?", "options":["To increase ground-fault current", "To prevent circulating currents on grounding conductors while maintaining the effective ground-fault current path", "To eliminate all bonding connections", "To isolate electronic equipment from ground"], "correct":1, "source":{"name":"NEC 2026 Article 250.6(B)", "url":""}, "explanation":"Per NEC 250.6(B), alterations may be made to stop objectionable current while still meeting the requirements for effective ground-fault current path. Alterations include changing locations or discontinuing (but not all) grounding connections."},
      {"id":"je-219", "question":"Currents that introduce electromagnetic interference or data errors in electronic equipment are considered objectionable currents per NEC 250.6. True or False?", "options":["True", "False - these are not considered objectionable currents for purposes of 250.6", "True, only if over 5mA", "True, only in industrial settings"], "correct":1, "source":{"name":"NEC 2026 Article 250.6(D)", "url":""}, "explanation":"Per NEC 250.6(D), currents that introduce electromagnetic interference or data errors in electronic equipment shall not be considered the objectionable currents addressed in 250.6."},
      {"id":"je-220", "question":"Type NMC cable can be used in what type of locations that Type NM cannot?", "options":["Hazardous locations", "Wet, damp, or corrosive locations", "Plenum spaces", "Service entrance applications"], "correct":1, "source":{"name":"NEC 2026 Article 334.10(B)", "url":""}, "explanation":"Per NEC 334.10(B), Type NMC cable is permitted for both exposed and concealed work in dry, wet, damp, or corrosive locations."},
      {"id":"je-221", "question":"Type NM and NMC cables shall NOT be installed exposed in dropped or suspended ceiling cavities in what occupancies?", "options":["Dwelling units", "Other than one-, two-family and multifamily dwellings", "All occupancies", "Commercial buildings only"], "correct":1, "source":{"name":"NEC 2026 Article 334.12(2)", "url":""}, "explanation":"Per NEC 334.12(2), Types NM and NMC cables shall not be exposed within a dropped or suspended ceiling cavity in other than one-, two-family and multifamily dwellings."},
      {"id":"je-222", "question":"Two-conductor Type NM cable shall not be stapled in what orientation?", "options":["Parallel to framing", "Perpendicular to framing", "On edge", "Flat"], "correct":2, "source":{"name":"NEC 2026 Article 334.30", "url":""}, "explanation":"Per NEC 334.30, flat cables shall not be stapled on edge."},
      {"id":"je-223", "question":"The sheath of nonmetallic-sheathed cable must extend how far into an enclosure beyond any cable clamp?", "options":["Flush with clamp", "1/4 inch minimum", "1/2 inch minimum", "1 inch minimum"], "correct":1, "source":{"name":"NEC 2026 Article 334.19", "url":""}, "explanation":"Per NEC 334.19, the sheath on nonmetallic-sheathed cable shall extend not less than 6mm (1/4 inch) beyond any cable clamp or cable entry inside the enclosure."},
      {"id":"je-224", "question":"When using 3-phase, 4-wire, wye-connected systems to supply nonlinear loads, what special consideration must be given?", "options":["Neutral conductor may carry high harmonic currents", "All phases must be the same color", "Ground conductors must be oversized", "AFCI protection is required"], "correct":0, "source":{"name":"NEC 2026 Article 210.4(A) Informational Note 1", "url":""}, "explanation":"Per NEC 210.4(A) Informational Note No. 1, a 3-phase, 4-wire, wye-connected power system used to supply power to nonlinear loads might necessitate that the power system design allow for the possibility of high harmonic currents on the neutral conductor."},
      {"id":"je-225", "question":"What reconditioned equipment is NOT permitted in branch circuits per NEC 210.3?", "options":["Motors", "Transformers", "Equipment providing GFCI or AFCI protection", "Switches"], "correct":2, "source":{"name":"NEC 2026 Article 210.3", "url":""}, "explanation":"Per NEC 210.3, equipment that provides ground-fault circuit-interrupter protection for personnel and equipment that provides arc-fault circuit-interrupter protection shall not be reconditioned."},
      {"id":"je-226", "question":"For dc systems over 60 volts, what color identifies positive polarity conductors 6 AWG or smaller?", "options":["Black", "White", "Red", "Blue"], "correct":2, "source":{"name":"NEC 2026 Article 210.5(C)(3)(a)", "url":""}, "explanation":"Per NEC 210.5(C)(3)(a), positive polarity dc conductors 6 AWG or smaller shall be identified by a continuous red outer finish or red stripe, among other options."},
      {"id":"je-227", "question":"For dc systems over 60 volts, what color identifies negative polarity conductors 6 AWG or smaller?", "options":["Red", "White", "Black", "Orange"], "correct":2, "source":{"name":"NEC 2026 Article 210.5(C)(3)(b)", "url":""}, "explanation":"Per NEC 210.5(C)(3)(b), negative polarity dc conductors 6 AWG or smaller shall be identified by a continuous black outer finish or black stripe, among other options."},
      {"id":"je-228", "question":"Luminaires without lampholders are now covered under what voltage limitation section?", "options":["210.6(A)", "210.6(B)", "210.6(C)", "210.6(D)"], "correct":2, "source":{"name":"NEC 2026 Article 210.6(C)(6)", "url":""}, "explanation":"Per NEC 210.6(C)(6), circuits not exceeding 277 volts to ground are permitted to supply luminaires without lampholders, such as luminaires with nonserviceable LEDs."},
      {"id":"je-229", "question":"GFCI protection is required in indoor damp and wet locations in dwelling units. True or False?", "options":["True", "False", "Only wet locations", "Only damp locations"], "correct":0, "source":{"name":"NEC 2026 Article 210.8(A)(13-14)", "url":""}, "explanation":"Per NEC 210.8(A)(13) and (14), GFCI protection is required for receptacles in indoor damp locations and indoor wet locations in dwelling units."},
      {"id":"je-230", "question":"What is the term for a conductor used to connect the system grounded conductor to a grounding electrode?", "options":["Equipment grounding conductor", "Bonding jumper", "Grounding electrode conductor", "Supply-side bonding jumper"], "correct":2, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, a grounding electrode conductor (GEC) is a conductor used to connect the system grounded conductor or the equipment to a grounding electrode."},
      {"id":"je-231", "question":"What is the maximum current a Class A GFCI will allow before tripping?", "options":["4-6 milliamps", "15 milliamps", "20 milliamps", "30 milliamps"], "correct":0, "source":{"name":"NEC 2026 Article 210.8 Commentary", "url":""}, "explanation":"Type-A (Class A) GFCIs operate on fault currents ranging from 4 to 6 milliamperes or more."},
      {"id":"je-232", "question":"For voltages above 150 volts to ground but not exceeding 480 volts at pools, what type of GFCI protection is required?", "options":["Class A GFCI", "SPGFCI not to exceed 20mA ground-fault trip current", "30mA GFCI", "No GFCI required"], "correct":1, "source":{"name":"NEC 2026 Article 680.5(C)", "url":""}, "explanation":"Per NEC 680.5(C), ground-fault protection of receptacles and outlets on branch circuits operating at voltages above 150 volts to ground shall be provided with SPGFCI protection not to exceed 20-mA ground-fault trip current."},
      {"id":"je-233", "question":"Terminals used for bonding and equipment grounding at pools shall be identified for use in what environment?", "options":["Dry locations", "Wet locations", "Indoor use only", "High temperature"], "correct":1, "source":{"name":"NEC 2026 Article 680.7(C)", "url":""}, "explanation":"Per NEC 680.7(C), terminals used for bonding and equipment grounding shall be identified for use in wet locations."},
      {"id":"je-234", "question":"Electric pool water heaters with resistive elements shall have heating elements subdivided into loads not exceeding what amperage?", "options":["30 amps", "40 amps", "48 amps", "60 amps"], "correct":2, "source":{"name":"NEC 2026 Article 680.10(A)(1)", "url":""}, "explanation":"Per NEC 680.10(A)(1), all electric pool water heaters incorporating resistive heating elements shall have the heating elements subdivided into loads not exceeding 48 amperes and protected at not over 60 amperes."},
      {"id":"je-235", "question":"At least one GFCI-protected receptacle is required in what pool-related location?", "options":["Pool deck", "Equipment room", "Fence area", "Diving platform"], "correct":1, "source":{"name":"NEC 2026 Article 680.12(B)", "url":""}, "explanation":"Per NEC 680.12(B)(1), at least one GFCI-protected 125-volt, 15- or 20-ampere receptacle shall be located within an equipment room."},
      {"id":"je-236", "question":"What is the minimum communication cable clearance above the maximum water level of a swimming pool?", "options":["6 feet", "8 feet", "10 feet", "14.5 feet"], "correct":2, "source":{"name":"NEC 2026 Article 680.9(B)", "url":""}, "explanation":"Per NEC 680.9(B), communications, radio, and television coaxial cables shall be permitted at a height of not less than 10 feet (3.0m) above the maximum water level."},
      {"id":"je-237", "question":"Underground wiring shall not be permitted under the pool unless what condition is met?", "options":["It is in rigid conduit", "It is in PVC conduit", "It is necessary to supply pool equipment permitted by Article 680", "It is at least 3 feet below the pool bottom"], "correct":2, "source":{"name":"NEC 2026 Article 680.11(B)", "url":""}, "explanation":"Per NEC 680.11(B), underground wiring shall not be permitted under the pool unless this wiring is necessary to supply pool equipment permitted by Article 680."},
      {"id":"je-238", "question":"Electrical equipment shall not be installed in pool rooms without what feature?", "options":["Windows", "Emergency lighting", "Drainage that prevents water accumulation", "Fire suppression"], "correct":2, "source":{"name":"NEC 2026 Article 680.12(A)", "url":""}, "explanation":"Per NEC 680.12(A), electrical equipment shall not be installed in rooms, vaults, or pits that do not have drainage that prevents water accumulation during normal operation or maintenance."},
      {"id":"je-239", "question":"For permanently installed pools, what wiring methods are permitted for flexible connections to motors?", "options":["Flexible cord only", "Liquidtight flexible metal, liquidtight flexible nonmetallic conduit, or MC cable suitable for the use", "Type NM cable", "Any flexible wiring method"], "correct":1, "source":{"name":"NEC 2026 Article 680.21(A)(1)", "url":""}, "explanation":"Per NEC 680.21(A)(1), where necessary to employ flexible connections at or adjacent to the motor, liquidtight flexible metal, liquidtight flexible nonmetallic conduit, or MC cable suitable for the use shall be permitted."},
      {"id":"je-240", "question":"Emergency systems must have adequate capacity per Article 120 (or approved method) and be capable of what?", "options":["Running indefinitely", "Supplying rapid load changes and transient power requirements", "Supplying all building loads", "Operating at 100% capacity continuously"], "correct":1, "source":{"name":"NEC 2026 Article 700.5(B)", "url":""}, "explanation":"Per NEC 700.5(B), the emergency system capacity shall be sufficient for the rapid load changes and transient power and energy requirements associated with any expected loads."},
      {"id":"je-241", "question":"Emergency source(s) shall be permitted to operate in parallel with the normal source under what condition?", "options":["Only during testing", "When the capacity required to supply the emergency load is maintained at all times", "Never", "Only with utility approval"], "correct":1, "source":{"name":"NEC 2026 Article 700.5(D)(1)", "url":""}, "explanation":"Per NEC 700.5(D)(1), the emergency source shall be permitted to operate in parallel with the normal source where the capacity required to supply the emergency load is maintained at all times."},
      {"id":"je-242", "question":"Transfer equipment for emergency systems must be designed to prevent what?", "options":["Parallel operation", "Inadvertent interconnection of normal and emergency sources", "Automatic operation", "Manual operation"], "correct":1, "source":{"name":"NEC 2026 Article 700.6(A)", "url":""}, "explanation":"Per NEC 700.6(A), transfer equipment shall be designed and installed to prevent the inadvertent interconnection of normal and emergency sources of supply in any operation of the transfer equipment."},
      {"id":"je-243", "question":"Meter-mounted transfer switches are permitted for emergency system use. True or False?", "options":["True", "False - meter-mounted transfer switches shall not be permitted for emergency system use", "True, with AHJ approval", "True, for residential only"], "correct":1, "source":{"name":"NEC 2026 Article 700.6(A)", "url":""}, "explanation":"Per NEC 700.6(A), meter-mounted transfer switches shall not be permitted for emergency system use."},
      {"id":"je-244", "question":"What test is required for emergency systems upon installation?", "options":["Load bank test only", "Commissioning witness test conducted or witnessed by the AHJ", "Utility company verification", "Insurance inspection only"], "correct":1, "source":{"name":"NEC 2026 Article 700.4(A)", "url":""}, "explanation":"Per NEC 700.4(A), the authority having jurisdiction shall conduct or witness the commissioning of the completed system upon installation."},
      {"id":"je-245", "question":"Emergency system tests and maintenance records must be made available to whom?", "options":["Building owners only", "Those authorized to design, install, inspect, maintain, and operate the system", "The utility company", "Insurance companies only"], "correct":1, "source":{"name":"NEC 2026 Article 700.4(D)", "url":""}, "explanation":"Per NEC 700.4(D), a written or digital record shall be kept of tests and maintenance and made available to those authorized to design, install, inspect, maintain, and operate the system."},
      {"id":"je-246", "question":"What is the definition of 'patient care vicinity' in health care facilities?", "options":["The entire patient room", "An area 6 feet horizontally in all directions from the bed and 7.5 feet above the floor", "Only the area around medical equipment", "The bed itself"], "correct":1, "source":{"name":"NEC 2026 Article 517 Commentary", "url":""}, "explanation":"The patient care vicinity consists of an area 6 feet horizontally in all directions from the bed and vertically to 7.5 feet above the floor."},
      {"id":"je-247", "question":"What exception allows luminaires in patient care spaces without requiring a separate insulated EGC?", "options":["All luminaires are exempt", "Luminaires more than 7.5 feet above the floor", "Listed luminaires only", "Emergency luminaires"], "correct":1, "source":{"name":"NEC 2026 Article 517.13 Exception", "url":""}, "explanation":"Per NEC 517.13 Exception, luminaires more than 2.3m (7.5 feet) above the floor and switches located outside of the patient care vicinity may be connected without a separate insulated EGC."},
      {"id":"je-248", "question":"Branch circuits serving life safety lighting and power circuits shall not be part of what type of circuit?", "options":["Dedicated circuit", "Multiwire branch circuit", "Shared circuit", "Home run circuit"], "correct":1, "source":{"name":"NEC 2026 Article 517.15", "url":""}, "explanation":"Per NEC 517.15, the branch circuit serving life safety lighting and power circuits shall not be part of a multiwire branch circuit."},
      {"id":"je-249", "question":"What electrical equipment is covered under Article 517 patient care-related equipment reconditioning exceptions?", "options":["Circuit breakers", "Wiring devices", "Patient care-related equipment like MRI, CT, X-ray units", "All hospital equipment"], "correct":2, "source":{"name":"NEC 2026 Article 517.3", "url":""}, "explanation":"Per NEC 517.3, the reconditioning requirements of the Code do not apply to patient care-related electrical equipment such as MRI, fluoroscopy, CT, and X-ray units, which are regulated under federal requirements."},
      {"id":"je-250", "question":"What sources are permitted to supplement the electrical service to a health care facility?", "options":["Generators only", "Power production source, fuel cell systems, energy storage systems, health care microgrids", "Utility power only", "Solar panels only"], "correct":1, "source":{"name":"NEC 2026 Article 517.4(A)", "url":""}, "explanation":"Per NEC 517.4(A), power production source, fuel cell systems, energy storage systems, and health care microgrids are permitted to supplement the service to supply the entire electrical load based on reliability."},
      {"id":"je-251", "question":"What is the maximum motor branch circuit short-circuit and ground-fault protection for a Design B motor using an inverse time breaker?", "options":["150% of motor FLC", "250% of motor FLC", "300% of motor FLC", "400% of motor FLC"], "correct":1, "source":{"name":"NEC 2026 Table 430.52", "url":""}, "explanation":"Per NEC Table 430.52, for single-phase and polyphase squirrel cage motors (Design B), the maximum rating for an inverse time breaker is 250% of motor full-load current."},
      {"id":"je-252", "question":"Motor overload protection is typically set at what percentage of the motor nameplate full-load current for motors with a service factor of 1.15 or greater?", "options":["100%", "115%", "125%", "140%"], "correct":2, "source":{"name":"NEC 2026 Article 430.32(A)(1)", "url":""}, "explanation":"Per NEC 430.32(A)(1), for motors with a service factor of 1.15 or greater, overload protection shall not exceed 125% of the motor nameplate full-load current."},
      {"id":"je-253", "question":"What is the maximum distance a motor disconnecting means can be located from the motor?", "options":["25 feet", "50 feet if within sight", "100 feet", "No limit if lockable"], "correct":1, "source":{"name":"NEC 2026 Article 430.102(B)", "url":""}, "explanation":"Per NEC 430.102(B) and the definition of 'in sight from,' the disconnecting means shall be in sight from the motor location, which means visible and not more than 50 feet distant."},
      {"id":"je-254", "question":"Conductors supplying a single motor shall have an ampacity not less than what percentage of the motor full-load current?", "options":["100%", "115%", "125%", "150%"], "correct":2, "source":{"name":"NEC 2026 Article 430.22(A)", "url":""}, "explanation":"Per NEC 430.22(A), conductors supplying a single motor shall have an ampacity not less than 125 percent of the motor full-load current."},
      {"id":"je-255", "question":"Conductors supplying multiple motors shall have ampacity not less than 125% of the largest motor FLC plus what?", "options":["100% of all other motor FLCs", "80% of all other motor FLCs", "Sum of all other motor FLCs", "50% of all other motor FLCs"], "correct":2, "source":{"name":"NEC 2026 Article 430.24", "url":""}, "explanation":"Per NEC 430.24, conductors supplying several motors shall have ampacity not less than the sum of 125% of the FLC of the highest rated motor plus the sum of the full-load currents of all other motors supplied."},
      {"id":"je-256", "question":"A motor controller must be able to start and stop the motor and must have a horsepower rating not less than what?", "options":["75% of motor horsepower", "Equal to motor horsepower", "125% of motor horsepower", "150% of motor horsepower"], "correct":1, "source":{"name":"NEC 2026 Article 430.83", "url":""}, "explanation":"Per NEC 430.83(A), the controller shall have a horsepower rating not lower than the horsepower rating of the motor."},
      {"id":"je-257", "question":"What is the minimum horsepower rating of a motor disconnecting means?", "options":["75% of motor HP", "Equal to or greater than motor HP", "115% of motor HP", "125% of motor HP"], "correct":1, "source":{"name":"NEC 2026 Article 430.110", "url":""}, "explanation":"Per NEC 430.110(A), the disconnecting means shall have a horsepower rating not less than that of the motor."},
      {"id":"je-258", "question":"For a torque motor, what current is used to size branch circuit conductors?", "options":["Full-load current", "Nameplate current", "Locked-rotor current", "Starting current"], "correct":2, "source":{"name":"NEC 2026 Article 430.6(B)", "url":""}, "explanation":"Per NEC 430.6(B), for torque motors, the rated current shall be the locked-rotor current, and this nameplate current shall be used to determine the ampacity of branch-circuit conductors."},
      {"id":"je-259", "question":"What type of motor has its output rating expressed in terms of locked-rotor torque instead of horsepower?", "options":["Induction motor", "Synchronous motor", "Torque motor", "Wound-rotor motor"], "correct":2, "source":{"name":"NEC 2026 Article 430.7(C)", "url":""}, "explanation":"Per NEC 430.7(C), torque motors are rated for operation at standstill and shall be marked with locked-rotor torque instead of horsepower."},
      {"id":"je-260", "question":"A motor with a service factor of 1.0 requires overload protection not exceeding what percentage of FLC?", "options":["100%", "105%", "115%", "125%"], "correct":2, "source":{"name":"NEC 2026 Article 430.32(A)(1)", "url":""}, "explanation":"Per NEC 430.32(A)(1), for motors with a service factor of less than 1.15, the overload protective device shall not exceed 115% of the motor nameplate full-load current."},
      {"id":"je-261", "question":"Which NEC table provides full-load currents for 3-phase AC motors?", "options":["Table 430.247", "Table 430.248", "Table 430.250", "Table 310.16"], "correct":2, "source":{"name":"NEC 2026 Table 430.250", "url":""}, "explanation":"NEC Table 430.250 provides full-load current values for three-phase alternating-current motors."},
      {"id":"je-262", "question":"Which NEC table provides full-load currents for single-phase AC motors?", "options":["Table 430.247", "Table 430.248", "Table 430.250", "Table 310.16"], "correct":1, "source":{"name":"NEC 2026 Table 430.248", "url":""}, "explanation":"NEC Table 430.248 provides full-load current values for single-phase alternating-current motors."},
      {"id":"je-263", "question":"The ampacity of conductors between an adjustable speed drive and the motor shall be based on what current?", "options":["Motor nameplate FLC", "The maximum operating current marked on the motor or control", "150% of table FLC", "Drive nameplate rating"], "correct":1, "source":{"name":"NEC 2026 Article 430.6(C)", "url":""}, "explanation":"Per NEC 430.6(C), for ac adjustable voltage motors, conductor ampacity shall be based on the maximum operating current marked on the motor nameplate or the control nameplate, or both."},
      {"id":"je-264", "question":"What is the minimum conductor size for motor control circuit conductors?", "options":["18 AWG", "16 AWG", "14 AWG", "12 AWG"], "correct":0, "source":{"name":"NEC 2026 Article 430.72(B)", "url":""}, "explanation":"Per NEC 430.72(B), motor control circuit conductors shall be not smaller than 18 AWG for copper or 16 AWG for aluminum."},
      {"id":"je-265", "question":"When the motor controller also serves as the disconnecting means, it must open all what?", "options":["Phase conductors only", "All ungrounded supply conductors", "Hot and neutral conductors", "All conductors including ground"], "correct":1, "source":{"name":"NEC 2026 Article 430.111", "url":""}, "explanation":"Per NEC 430.111, where a motor controller also serves as the disconnecting means, it shall open all ungrounded supply conductors."},
      {"id":"je-266", "question":"What NEC article covers requirements for air-conditioning and refrigerating equipment?", "options":["Article 410", "Article 422", "Article 430", "Article 440"], "correct":3, "source":{"name":"NEC 2026 Article 440", "url":""}, "explanation":"Article 440 covers electric motor-driven air-conditioning and refrigerating equipment, including sealed motor-compressors."},
      {"id":"je-267", "question":"A hermetic refrigerant motor-compressor uses what current rating for sizing conductors?", "options":["Locked-rotor current", "Nameplate rated-load current or branch-circuit selection current, whichever is greater", "Full-load current only", "Starting current"], "correct":1, "source":{"name":"NEC 2026 Article 440.6", "url":""}, "explanation":"Per NEC 440.6, the ampacity of conductors shall be determined based on the rated-load current or branch-circuit selection current, whichever is greater."},
      {"id":"je-268", "question":"What size equipment grounding conductor is required for a circuit protected by a 100-amp overcurrent device?", "options":["#10 AWG", "#8 AWG", "#6 AWG", "#4 AWG"], "correct":1, "source":{"name":"NEC 2026 Table 250.122", "url":""}, "explanation":"Per NEC Table 250.122, a circuit protected by a 100-amp overcurrent device requires a minimum #8 AWG copper equipment grounding conductor."},
      {"id":"je-269", "question":"What size equipment grounding conductor is required for a circuit protected by a 200-amp overcurrent device?", "options":["#8 AWG", "#6 AWG", "#4 AWG", "#2 AWG"], "correct":1, "source":{"name":"NEC 2026 Table 250.122", "url":""}, "explanation":"Per NEC Table 250.122, a circuit protected by a 200-amp overcurrent device requires a minimum #6 AWG copper equipment grounding conductor."},
      {"id":"je-270", "question":"What is the minimum copper grounding electrode conductor size for a service with #2 AWG or smaller service entrance conductors?", "options":["#10 AWG", "#8 AWG", "#6 AWG", "#4 AWG"], "correct":1, "source":{"name":"NEC 2026 Table 250.66", "url":""}, "explanation":"Per NEC Table 250.66, for copper service entrance conductors #2 AWG or smaller, the minimum copper grounding electrode conductor is #8 AWG."},
      {"id":"je-271", "question":"The grounding electrode conductor shall be installed in one continuous length without what?", "options":["Bends", "Conduit", "Splices (unless certain listed methods used)", "Insulation"], "correct":2, "source":{"name":"NEC 2026 Article 250.64(C)", "url":""}, "explanation":"Per NEC 250.64(C), except for specified methods, the grounding electrode conductor shall be installed in one continuous length without a splice or joint."},
      {"id":"je-272", "question":"Grounding electrode conductors #6 AWG and smaller that are not subject to physical damage shall be protected by what?", "options":["Rigid metal conduit only", "PVC conduit only", "Running in a raceway, armor, or cable is not required", "EMT only"], "correct":2, "source":{"name":"NEC 2026 Article 250.64(B)", "url":""}, "explanation":"Per NEC 250.64(B), grounding electrode conductors #6 AWG and smaller that are not subject to physical damage are not required to be enclosed in a raceway."},
      {"id":"je-273", "question":"What types of electrodes are required to be part of the grounding electrode system if present at a building?", "options":["Only those installed", "Metal underground water pipe, metal frame of building, concrete-encased electrode if present", "Ground rods only", "Ufer ground only"], "correct":1, "source":{"name":"NEC 2026 Article 250.50", "url":""}, "explanation":"Per NEC 250.50, all grounding electrodes that are present at a building shall be bonded together to form the grounding electrode system, including metal water pipes, building steel, and concrete-encased electrodes."},
      {"id":"je-274", "question":"A metal underground water pipe electrode must be supplemented by an additional electrode unless what?", "options":["It is copper", "The water pipe is in direct contact with earth for 10 feet or more", "Always requires supplemental electrode", "The pipe is 2 inches or larger"], "correct":2, "source":{"name":"NEC 2026 Article 250.53(D)(2)", "url":""}, "explanation":"Per NEC 250.53(D)(2), a metal underground water pipe electrode shall be supplemented by an additional electrode."},
      {"id":"je-275", "question":"A concrete-encased electrode (Ufer ground) must have at least how many feet of bare copper or steel reinforcing bars encased in concrete?", "options":["10 feet", "15 feet", "20 feet", "25 feet"], "correct":2, "source":{"name":"NEC 2026 Article 250.52(A)(3)", "url":""}, "explanation":"Per NEC 250.52(A)(3), a concrete-encased electrode consists of at least 20 feet of bare copper conductor or steel reinforcing bars encased in concrete."},
      {"id":"je-276", "question":"Ground rods shall have a minimum length of how many feet?", "options":["6 feet", "8 feet", "10 feet", "12 feet"], "correct":1, "source":{"name":"NEC 2026 Article 250.52(A)(5)", "url":""}, "explanation":"Per NEC 250.52(A)(5), rod electrodes shall be not less than 8 feet (2.44 m) in length."},
      {"id":"je-277", "question":"If a single ground rod has a resistance to ground exceeding 25 ohms, what is required?", "options":["Install larger rod", "Install supplemental electrode", "Deeper installation", "Add salt to soil"], "correct":1, "source":{"name":"NEC 2026 Article 250.53(A)(2)", "url":""}, "explanation":"Per NEC 250.53(A)(2), if a single rod electrode has a resistance to ground exceeding 25 ohms, it shall be supplemented by an additional electrode."},
      {"id":"je-278", "question":"Two ground rods used as a grounding electrode system must be spaced at least how far apart?", "options":["4 feet", "6 feet", "8 feet", "10 feet"], "correct":1, "source":{"name":"NEC 2026 Article 250.53(A)(3)", "url":""}, "explanation":"Per NEC 250.53(A)(3), where multiple rod electrodes are installed, they shall be not less than 6 feet (1.8 m) apart."},
      {"id":"je-279", "question":"The minimum size copper bonding jumper for a 200-amp service is what?", "options":["#8 AWG", "#6 AWG", "#4 AWG", "#2 AWG"], "correct":2, "source":{"name":"NEC 2026 Article 250.102(C), Table 250.102(C)(1)", "url":""}, "explanation":"Per NEC Table 250.102(C)(1), for service entrance conductors 3/0 AWG through 350 kcmil (typical for 200A service), the minimum supply-side bonding jumper is #4 AWG copper."},
      {"id":"je-280", "question":"At what voltage level must service disconnects be capable of being locked in the open position?", "options":["All voltage levels", "Over 150 volts to ground", "Over 277 volts to ground", "Over 480 volts"], "correct":0, "source":{"name":"NEC 2026 Article 230.82(3)", "url":""}, "explanation":"Per NEC 230.82(3), service disconnecting means shall be capable of being locked in the open position for all voltage levels."},
      {"id":"je-281", "question":"What is the minimum wire bending space for a #2 AWG conductor at a terminal?", "options":["1.5 inches", "2 inches", "2.5 inches", "3 inches"], "correct":2, "source":{"name":"NEC 2026 Table 312.6(A)", "url":""}, "explanation":"Per NEC Table 312.6(A), the minimum wire bending space for a #2 AWG conductor is 2.5 inches."},
      {"id":"je-282", "question":"The maximum number of overcurrent devices in a lighting and appliance branch-circuit panelboard is what?", "options":["30", "42", "No limit specified for modern panelboards", "84"], "correct":2, "source":{"name":"NEC 2026 Article 408", "url":""}, "explanation":"The NEC no longer limits the number of overcurrent devices in a panelboard. The 42-circuit limit for lighting and appliance panelboards was removed in the 2008 NEC."},
      {"id":"je-283", "question":"Panelboards installed in wet locations must be what type?", "options":["Weatherproof", "Listed for wet locations", "NEMA 3R minimum", "Stainless steel"], "correct":0, "source":{"name":"NEC 2026 Article 408.40", "url":""}, "explanation":"Per NEC 408.40, panelboards in wet locations shall be weatherproof and be installed to prevent moisture or water from entering and accumulating within the panelboard."},
      {"id":"je-284", "question":"What is the minimum clearance required between the top of a switchboard and a combustible ceiling?", "options":["3 feet", "2 feet", "900 mm (3 feet)", "No specific requirement"], "correct":2, "source":{"name":"NEC 2026 Article 408.22", "url":""}, "explanation":"Per NEC 408.22, a minimum clearance of 900 mm (3 feet) shall be provided between the top of a switchboard and a combustible ceiling, unless enclosed."},
      {"id":"je-285", "question":"Transformers rated over 600 volts installed indoors must be installed in a transformer vault unless what exception applies?", "options":["They are dry-type and meet specific requirements", "They are less than 50 kVA", "They are listed for indoor use", "They have fusible links"], "correct":0, "source":{"name":"NEC 2026 Article 450.21", "url":""}, "explanation":"Per NEC 450.21 and 450.22, dry-type transformers rated over 600V can be installed indoors without a vault under certain conditions including adequate separation and specific construction requirements."},
      {"id":"je-286", "question":"What is the maximum overcurrent protection for a transformer rated over 1000 volts with fuses?", "options":["125% of rated primary current", "150% of rated primary current", "250% of rated primary current", "300% of rated primary current"], "correct":2, "source":{"name":"NEC 2026 Table 450.3(A)", "url":""}, "explanation":"Per NEC Table 450.3(A), for transformers over 1000V with primary fuse protection, the maximum rating is 250% (or 300% for circuit breakers) of the rated primary current."},
      {"id":"je-287", "question":"Dry-type transformers rated 600 volts or less and not exceeding what kVA rating can be installed in hollow spaces of buildings if properly ventilated?", "options":["25 kVA", "50 kVA", "75 kVA", "112.5 kVA"], "correct":1, "source":{"name":"NEC 2026 Article 450.21(A)", "url":""}, "explanation":"Per NEC 450.21(A), dry-type transformers installed indoors and rated 600 volts, nominal, or less shall have a separation of at least 12 inches from combustible material unless not more than 50 kVA and rated less than 150°C rise."},
      {"id":"je-288", "question":"Generator terminals operating at over 50 volts must be guarded against what?", "options":["Moisture", "Dust", "Accidental contact", "All of the above"], "correct":2, "source":{"name":"NEC 2026 Article 445.16", "url":""}, "explanation":"Per NEC 445.16, live parts of generators operating at more than 50 volts to ground shall be guarded against accidental contact."},
      {"id":"je-289", "question":"Generators must be equipped with what type of disconnecting means?", "options":["Manual only", "A disconnect that can disconnect all sources of supply", "Automatic only", "No specific requirement"], "correct":1, "source":{"name":"NEC 2026 Article 445.18", "url":""}, "explanation":"Per NEC 445.18, generators shall be equipped with a disconnect by means of which the generator can be disconnected from all other sources of supply."},
      {"id":"je-290", "question":"Ampacity of generator conductors shall be based on what?", "options":["125% of nameplate current", "The nameplate current rating of the generator", "150% of nameplate current", "Calculated load"], "correct":1, "source":{"name":"NEC 2026 Article 445.13", "url":""}, "explanation":"Per NEC 445.13, the ampacity of the conductors from the generator terminals to the first distribution device shall not be less than 115% of the nameplate current rating of the generator."},
      {"id":"je-291", "question":"Stationary batteries in dwelling units must be installed in what manner?", "options":["In a garage only", "In accordance with Article 480", "In a dedicated battery room", "Not permitted in dwelling units"], "correct":1, "source":{"name":"NEC 2026 Article 480", "url":""}, "explanation":"Per NEC Article 480, stationary batteries in all locations, including dwelling units, must meet the requirements of Article 480."},
      {"id":"je-292", "question":"Battery systems over what voltage require a disconnecting means?", "options":["30 volts", "50 volts", "60 volts", "120 volts"], "correct":1, "source":{"name":"NEC 2026 Article 480.6", "url":""}, "explanation":"Per NEC 480.6, a disconnecting means shall be provided for battery systems operating at more than 50 volts."},
      {"id":"je-293", "question":"What protection is required for battery racks in locations exposed to physical damage?", "options":["No protection required", "Guards", "Concrete enclosure", "Chain link fence"], "correct":1, "source":{"name":"NEC 2026 Article 480.10", "url":""}, "explanation":"Per NEC 480.10, batteries shall be guarded against physical damage where subject to such damage."},
      {"id":"je-294", "question":"What is the maximum voltage for a battery system requiring only Class 2 wiring?", "options":["30 volts", "50 volts", "100 volt-amperes and 30 volts", "150 volts"], "correct":2, "source":{"name":"NEC 2026 Article 720, 725", "url":""}, "explanation":"Class 2 circuits are power-limited to 100 volt-amperes at up to 30 volts as defined in Chapter 9, Table 11(A)."},
      {"id":"je-295", "question":"What NEC article covers electric signs and outline lighting?", "options":["Article 600", "Article 604", "Article 610", "Article 620"], "correct":0, "source":{"name":"NEC 2026 Article 600", "url":""}, "explanation":"NEC Article 600 covers electric signs and outline lighting systems."},
      {"id":"je-296", "question":"Electric signs must be listed unless what exception applies?", "options":["They are indoor signs", "They are field-installed skeleton tubing", "They are less than 100 watts", "They are 12 volts or less"], "correct":1, "source":{"name":"NEC 2026 Article 600.3", "url":""}, "explanation":"Per NEC 600.3, electric signs and outline lighting shall be listed, except for field-installed skeleton tubing."},
      {"id":"je-297", "question":"Each commercial building with ground floor area must have at least how many sign outlets?", "options":["None required", "One per tenant space or occupancy", "One for the entire building", "Two per entrance"], "correct":1, "source":{"name":"NEC 2026 Article 600.5(A)", "url":""}, "explanation":"Per NEC 600.5(A), at least one sign outlet shall be supplied to each tenant space with an entrance at grade level."},
      {"id":"je-298", "question":"What NEC article covers elevators, dumbwaiters, escalators, and moving walks?", "options":["Article 610", "Article 620", "Article 625", "Article 630"], "correct":1, "source":{"name":"NEC 2026 Article 620", "url":""}, "explanation":"NEC Article 620 covers the installation of electrical equipment and wiring for elevators, dumbwaiters, escalators, moving walks, platform lifts, and stairway chairlifts."},
      {"id":"je-299", "question":"What type of receptacle is required in elevator machine rooms?", "options":["15-amp duplex", "20-amp single", "GFCI-protected 125V, 20-amp single receptacle", "Any 120V receptacle"], "correct":2, "source":{"name":"NEC 2026 Article 620.23", "url":""}, "explanation":"Per NEC 620.23, a GFCI-protected 125-volt, single, 20-ampere receptacle shall be provided in each machine room and control room."},
      {"id":"je-300", "question":"What NEC article covers electric vehicle power transfer systems?", "options":["Article 620", "Article 625", "Article 626", "Article 630"], "correct":1, "source":{"name":"NEC 2026 Article 625", "url":""}, "explanation":"NEC Article 625 covers the electrical conductors and equipment external to an electric vehicle that connect an electric vehicle to a supply of electricity and the installation of equipment and devices related to electric vehicle charging."},
      {"id":"je-301", "question":"Electric vehicle charging equipment must be supplied by what type of branch circuit?", "options":["Any branch circuit", "A dedicated branch circuit for each EVSE", "A shared circuit", "An appliance branch circuit"], "correct":1, "source":{"name":"NEC 2026 Article 625.40", "url":""}, "explanation":"Per NEC 625.40, the electric vehicle charging system shall be supplied by an individual branch circuit that supplies no other loads."},
      {"id":"je-302", "question":"What is the continuous load calculation for an electric vehicle charging circuit?", "options":["80% of circuit rating", "100% of nameplate rating", "125% of maximum load", "150% of rated current"], "correct":2, "source":{"name":"NEC 2026 Article 625.41", "url":""}, "explanation":"Per NEC 625.41, for EVSE rated as a continuous load, the branch circuit conductors and overcurrent protection shall be sized at 125% of the maximum load."},
      {"id":"je-303", "question":"EVSE cord sets shall not exceed what length?", "options":["15 feet", "20 feet", "25 feet", "Length specified in listing"], "correct":3, "source":{"name":"NEC 2026 Article 625.17(B)", "url":""}, "explanation":"Per NEC 625.17(B), EVSE cords shall not exceed the length specified in the listing for the equipment."},
      {"id":"je-304", "question":"What ventilation is required for indoor electric vehicle charging areas?", "options":["Natural ventilation", "Mechanical ventilation per manufacturer requirements", "Not required", "Exhaust fans only"], "correct":1, "source":{"name":"NEC 2026 Article 625.52", "url":""}, "explanation":"Per NEC 625.52, ventilation shall be provided for indoor sites in accordance with the mechanical code and manufacturer instructions."},
      {"id":"je-305", "question":"The maximum voltage for EVSE equipment in dwelling units is typically what?", "options":["120 volts", "208 volts", "240 volts", "600 volts"], "correct":3, "source":{"name":"NEC 2026 Article 625", "url":""}, "explanation":"EVSE in dwelling units can operate at voltages up to 600 volts, though common residential installations use 240V single-phase."},
      {"id":"je-306", "question":"Article 680 requires all underwater pool luminaires to operate at what maximum voltage unless listed for higher voltage?", "options":["12 volts", "15 volts", "30 volts", "150 volts"], "correct":1, "source":{"name":"NEC 2026 Article 680.23(A)(3)", "url":""}, "explanation":"Per NEC 680.23(A)(3), no underwater luminaire shall be installed for operation on supply circuits over 15 volts between conductors, unless specifically listed for higher voltages."},
      {"id":"je-307", "question":"Pool equipotential bonding grid conductors shall be not smaller than what size?", "options":["#10 AWG", "#8 AWG solid copper", "#6 AWG", "#4 AWG"], "correct":1, "source":{"name":"NEC 2026 Article 680.26(C)", "url":""}, "explanation":"Per NEC 680.26(C), equipotential bonding for pools shall be provided using solid copper conductors, insulated, covered, or bare, not smaller than 8 AWG."},
      {"id":"je-308", "question":"The equipotential bonding grid for a permanently installed pool must extend horizontally how far from the inside walls?", "options":["18 inches", "3 feet", "5 feet", "10 feet"], "correct":1, "source":{"name":"NEC 2026 Article 680.26(B)(1)", "url":""}, "explanation":"Per NEC 680.26(B)(1), perimeter surfaces shall extend for 3 feet (1.0m) horizontally beyond the inside walls of the pool."},
      {"id":"je-309", "question":"Pool pump motors must be protected by what?", "options":["Standard breaker", "Class A GFCI", "Fuse only", "No specific protection required"], "correct":1, "source":{"name":"NEC 2026 Article 680.21(C)", "url":""}, "explanation":"Per NEC 680.21(C), all outlets supplying pool pump motors shall be provided with Class A GFCI protection."},
      {"id":"je-310", "question":"What is the minimum distance required between a receptacle and the inside wall of a permanently installed pool?", "options":["3 feet", "5 feet", "6 feet", "10 feet"], "correct":2, "source":{"name":"NEC 2026 Article 680.22(A)(1)", "url":""}, "explanation":"Per NEC 680.22(A)(1), receptacles shall be located not less than 6 feet (1.8m) from the inside walls of a pool."},
      {"id":"je-311", "question":"At least one receptacle is required within what distance of the inside wall of a permanent pool?", "options":["6-10 feet", "6-20 feet", "10-15 feet", "10-20 feet"], "correct":1, "source":{"name":"NEC 2026 Article 680.22(A)(3)", "url":""}, "explanation":"Per NEC 680.22(A)(3), at least one receptacle outlet shall be located between 6 feet (1.8m) and 20 feet (6.0m) from the inside wall of the pool."},
      {"id":"je-312", "question":"Luminaires, lighting outlets, and ceiling-suspended paddle fans must be at least how far horizontally from the inside walls of a pool?", "options":["3 feet", "5 feet", "10 feet", "12 feet"], "correct":1, "source":{"name":"NEC 2026 Article 680.22(B)(1)", "url":""}, "explanation":"Per NEC 680.22(B)(1), luminaires, lighting outlets, and ceiling-suspended paddle fans shall be located at least 5 feet (1.5m) horizontally from the inside walls of a pool."},
      {"id":"je-313", "question":"What NEC article covers hazardous (classified) locations?", "options":["Article 480", "Article 500", "Article 504", "Article 600"], "correct":1, "source":{"name":"NEC 2026 Article 500", "url":""}, "explanation":"NEC Article 500 covers general requirements for electrical equipment and wiring in hazardous (classified) locations."},
      {"id":"je-314", "question":"Class I locations contain what type of hazard?", "options":["Combustible dust", "Easily ignitable fibers", "Flammable gases, flammable liquid-produced vapors, or combustible liquid-produced vapors", "Corrosive materials"], "correct":2, "source":{"name":"NEC 2026 Article 500.5(B)", "url":""}, "explanation":"Per NEC 500.5(B), Class I locations are those in which flammable gases, flammable liquid-produced vapors, or combustible liquid-produced vapors are or may be present."},
      {"id":"je-315", "question":"Class II locations contain what type of hazard?", "options":["Flammable gases", "Combustible dust", "Ignitable fibers", "Liquefied petroleum gas"], "correct":1, "source":{"name":"NEC 2026 Article 500.5(C)", "url":""}, "explanation":"Per NEC 500.5(C), Class II locations are those that are hazardous because of the presence of combustible dust."},
      {"id":"je-316", "question":"Class III locations contain what type of hazard?", "options":["Flammable gases", "Combustible dust", "Easily ignitable fibers or flyings", "Corrosive vapors"], "correct":2, "source":{"name":"NEC 2026 Article 500.5(D)", "url":""}, "explanation":"Per NEC 500.5(D), Class III locations are those that are hazardous because of the presence of easily ignitable fibers or flyings."},
      {"id":"je-317", "question":"Division 1 locations are where hazardous conditions exist under what circumstances?", "options":["Only during abnormal operation", "Under normal operating conditions, or frequently during maintenance", "Only during emergencies", "Never under normal conditions"], "correct":1, "source":{"name":"NEC 2026 Article 500.5", "url":""}, "explanation":"Per NEC 500.5, Division 1 locations are those where ignitable concentrations of hazardous materials exist under normal operating conditions or frequently during repair or maintenance."},
      {"id":"je-318", "question":"Division 2 locations are where hazardous conditions exist under what circumstances?", "options":["Under normal operating conditions", "Only under abnormal conditions", "Continuously", "During maintenance only"], "correct":1, "source":{"name":"NEC 2026 Article 500.5", "url":""}, "explanation":"Per NEC 500.5, Division 2 locations are those where ignitable concentrations are handled, processed, or used, but under normal conditions are confined within closed systems and might be released only through abnormal operation or failure."},
      {"id":"je-319", "question":"What wiring method is commonly required in Class I, Division 1 locations?", "options":["Type NM cable", "EMT", "Threaded rigid metal conduit or MI cable", "Flexible metal conduit"], "correct":2, "source":{"name":"NEC 2026 Article 501.10(A)", "url":""}, "explanation":"Per NEC 501.10(A), wiring methods in Class I, Division 1 locations shall be threaded rigid metal conduit, threaded steel intermediate metal conduit, MI cable, or other approved methods."},
      {"id":"je-320", "question":"Sealing fittings are required in hazardous location conduit systems to prevent what?", "options":["Water intrusion", "Passage of gases, vapors, or flames from one portion to another", "Mechanical damage", "Corrosion"], "correct":1, "source":{"name":"NEC 2026 Article 501.15", "url":""}, "explanation":"Per NEC 501.15, sealing fittings are required to prevent the passage of gases, vapors, or flames from one portion of the electrical installation to another through the conduit."},
      {"id":"je-321", "question":"What NEC article covers motor fuel dispensing facilities (gas stations)?", "options":["Article 500", "Article 511", "Article 514", "Article 515"], "correct":2, "source":{"name":"NEC 2026 Article 514", "url":""}, "explanation":"NEC Article 514 covers locations where gasoline or other volatile flammable liquids or liquefied flammable gases are transferred to fuel tanks of vehicles."},
      {"id":"je-322", "question":"Commercial garages where flammable fuels are dispensed or repaired fall under what NEC article?", "options":["Article 500", "Article 511", "Article 514", "Article 520"], "correct":1, "source":{"name":"NEC 2026 Article 511", "url":""}, "explanation":"NEC Article 511 covers commercial garages used for service and repair operations on vehicles using volatile flammable liquids for fuel."},
      {"id":"je-323", "question":"What NEC article covers bulk storage plants for flammable liquids?", "options":["Article 511", "Article 514", "Article 515", "Article 516"], "correct":2, "source":{"name":"NEC 2026 Article 515", "url":""}, "explanation":"NEC Article 515 covers areas where flammable liquids are received by tank vessel, pipelines, tank car, or tank vehicle and are stored or blended in bulk for distribution."},
      {"id":"je-324", "question":"Spray application, dipping, coating, and printing processes are covered by what NEC article?", "options":["Article 514", "Article 515", "Article 516", "Article 517"], "correct":2, "source":{"name":"NEC 2026 Article 516", "url":""}, "explanation":"NEC Article 516 covers locations where flammable liquids, combustible liquids, or combustible powders are applied by spray operations and other processes."},
      {"id":"je-325", "question":"Agricultural buildings housing livestock are covered by what NEC article?", "options":["Article 520", "Article 545", "Article 547", "Article 550"], "correct":2, "source":{"name":"NEC 2026 Article 547", "url":""}, "explanation":"NEC Article 547 covers agricultural buildings and the associated electrical systems in areas of buildings or adjacent areas where excessive dust and dust with water, corrosive atmosphere, or a combination of these exist."},
      {"id":"je-326", "question":"What type of equipment grounding conductor is permitted in agricultural buildings with corrosive environments?", "options":["Any metal type", "Copper only", "Aluminum only", "Bare copper prohibited"], "correct":1, "source":{"name":"NEC 2026 Article 547.5(F)", "url":""}, "explanation":"Per NEC 547.5(F), equipment grounding conductors in agricultural buildings with corrosive atmospheres shall be copper or copper-clad."},
      {"id":"je-327", "question":"Mobile homes and manufactured housing are covered by what NEC article?", "options":["Article 545", "Article 547", "Article 550", "Article 551"], "correct":2, "source":{"name":"NEC 2026 Article 550", "url":""}, "explanation":"NEC Article 550 covers the electrical conductors and equipment installed within or on mobile homes and manufactured homes."},
      {"id":"je-328", "question":"What is the minimum service or feeder for a mobile home?", "options":["60 amps", "100 amps", "150 amps", "200 amps"], "correct":1, "source":{"name":"NEC 2026 Article 550.32", "url":""}, "explanation":"Per NEC 550.32, a mobile home service shall be rated at not less than 100 amperes at 120/240 volts."},
      {"id":"je-329", "question":"Recreational vehicles (RVs) are covered by what NEC article?", "options":["Article 550", "Article 551", "Article 552", "Article 553"], "correct":1, "source":{"name":"NEC 2026 Article 551", "url":""}, "explanation":"NEC Article 551 covers the electrical conductors and equipment for recreational vehicles."},
      {"id":"je-330", "question":"The standard 30-amp RV power supply connection uses what type of plug configuration?", "options":["NEMA 5-30P", "NEMA 14-30P", "NEMA TT-30P", "NEMA L5-30P"], "correct":2, "source":{"name":"NEC 2026 Article 551", "url":""}, "explanation":"The standard 30-amp, 125-volt recreational vehicle power supply uses the NEMA TT-30P plug configuration."},
      {"id":"je-331", "question":"RV parks and campgrounds are covered by what NEC article?", "options":["Article 550", "Article 551", "Article 552", "Article 553"], "correct":2, "source":{"name":"NEC 2026 Article 552", "url":""}, "explanation":"NEC Article 552 covers electrical equipment and installations in park trailers and recreational vehicle parks."},
      {"id":"je-332", "question":"Floating buildings are covered by what NEC article?", "options":["Article 552", "Article 553", "Article 555", "Article 600"], "correct":1, "source":{"name":"NEC 2026 Article 553", "url":""}, "explanation":"NEC Article 553 covers floating buildings and the electrical installation for floating buildings."},
      {"id":"je-333", "question":"Marinas and boatyards are covered by what NEC article?", "options":["Article 553", "Article 555", "Article 600", "Article 680"], "correct":1, "source":{"name":"NEC 2026 Article 555", "url":""}, "explanation":"NEC Article 555 covers the installation of wiring and equipment in marinas, boatyards, boat basins, and similar occupancies."},
      {"id":"je-334", "question":"Shore power receptacles for boats must be protected by what?", "options":["Standard breaker", "AFCI", "GFCI or GFPE", "No specific protection required"], "correct":2, "source":{"name":"NEC 2026 Article 555.3", "url":""}, "explanation":"Per NEC 555.3, power outlets supplying shore power to boats shall have GFCI protection for 125V and 15, 20, or 30-amp circuits, or GFPE for larger circuits."},
      {"id":"je-335", "question":"Temporary wiring for construction sites is covered by what NEC article?", "options":["Article 525", "Article 527", "Article 590", "Article 600"], "correct":2, "source":{"name":"NEC 2026 Article 590", "url":""}, "explanation":"NEC Article 590 covers temporary electrical power and lighting installations."},
      {"id":"je-336", "question":"Temporary wiring installations are permitted for what maximum time period?", "options":["30 days", "90 days", "180 days", "The period of construction, remodeling, maintenance, repair, or demolition"], "correct":3, "source":{"name":"NEC 2026 Article 590.3(A)", "url":""}, "explanation":"Per NEC 590.3(A), temporary electrical power and lighting installations shall be permitted during the period of construction, remodeling, maintenance, repair, or demolition of buildings."},
      {"id":"je-337", "question":"GFCI protection is required on temporary wiring construction sites for what circuits?", "options":["All 125V circuits", "All 125V, 15, 20, and 30-amp receptacle outlets", "Only 15-amp circuits", "Only outdoor receptacles"], "correct":1, "source":{"name":"NEC 2026 Article 590.6(A)", "url":""}, "explanation":"Per NEC 590.6(A), all 125-volt, single-phase, 15-, 20-, and 30-ampere receptacle outlets used for temporary power during construction shall have GFCI protection."},
      {"id":"je-338", "question":"Article 700 emergency systems must restore power within what time frame?", "options":["5 seconds", "10 seconds", "30 seconds", "60 seconds"], "correct":1, "source":{"name":"NEC 2026 Article 700.12(B)", "url":""}, "explanation":"Per NEC 700.12(B), emergency systems shall automatically restore power within 10 seconds of interruption of the normal supply."},
      {"id":"je-339", "question":"What NEC article covers legally required standby systems?", "options":["Article 700", "Article 701", "Article 702", "Article 705"], "correct":1, "source":{"name":"NEC 2026 Article 701", "url":""}, "explanation":"NEC Article 701 covers legally required standby systems, which are those required by codes to provide power to selected loads in the event of normal power failure."},
      {"id":"je-340", "question":"Legally required standby systems must restore power within what time frame?", "options":["10 seconds", "30 seconds", "60 seconds", "2 minutes"], "correct":2, "source":{"name":"NEC 2026 Article 701.12(B)", "url":""}, "explanation":"Per NEC 701.12(B), legally required standby systems shall have power available within 60 seconds of failure of the normal power source."},
      {"id":"je-341", "question":"What NEC article covers optional standby systems?", "options":["Article 700", "Article 701", "Article 702", "Article 705"], "correct":2, "source":{"name":"NEC 2026 Article 702", "url":""}, "explanation":"NEC Article 702 covers optional standby systems that provide power for selected loads when the normal supply fails."},
      {"id":"je-342", "question":"Optional standby systems are those intended to supply what types of loads?", "options":["Life safety loads", "Legally required loads", "Loads where life safety does not depend on the system", "Emergency egress lighting"], "correct":2, "source":{"name":"NEC 2026 Article 702.2", "url":""}, "explanation":"Per NEC 702.2, optional standby systems are intended to supply power to public or private facilities or property where life safety does not depend on the performance of the system."},
      {"id":"je-343", "question":"What NEC article covers interconnected electric power production sources?", "options":["Article 700", "Article 702", "Article 705", "Article 710"], "correct":2, "source":{"name":"NEC 2026 Article 705", "url":""}, "explanation":"NEC Article 705 covers the installation of one or more electric power production sources operating in parallel with a primary source(s) of electricity."},
      {"id":"je-344", "question":"Solar photovoltaic systems are covered by what NEC article?", "options":["Article 690", "Article 691", "Article 692", "Article 705"], "correct":0, "source":{"name":"NEC 2026 Article 690", "url":""}, "explanation":"NEC Article 690 covers solar photovoltaic (PV) electrical energy systems, including the array circuit(s), inverter(s), and controller(s)."},
      {"id":"je-345", "question":"What is the maximum voltage for most residential solar PV systems?", "options":["300 volts", "480 volts", "600 volts", "1000 volts"], "correct":2, "source":{"name":"NEC 2026 Article 690.7", "url":""}, "explanation":"Per NEC 690.7, PV systems for other than dwelling units are permitted up to 1000 volts. Dwelling unit PV systems are typically limited to 600 volts."},
      {"id":"je-346", "question":"PV system circuit conductors must be sized at what percentage of maximum current?", "options":["100%", "115%", "125%", "150%"], "correct":2, "source":{"name":"NEC 2026 Article 690.9", "url":""}, "explanation":"Per NEC 690.9, PV source circuit and output circuit conductor ampacity shall be not less than 125% of the maximum current."},
      {"id":"je-347", "question":"What type of disconnecting means is required for PV systems?", "options":["Fused disconnect only", "Circuit breaker only", "A means to disconnect all current-carrying conductors from all sources simultaneously", "Manual switch only"], "correct":2, "source":{"name":"NEC 2026 Article 690.15", "url":""}, "explanation":"Per NEC 690.15, means shall be provided to disconnect all current-carrying dc conductors of a PV system from all other conductors in a building or structure."},
      {"id":"je-348", "question":"PV system disconnects must be located where?", "options":["Inside only", "Outside only", "In a readily accessible location", "At the meter only"], "correct":2, "source":{"name":"NEC 2026 Article 690.15", "url":""}, "explanation":"Per NEC 690.15, the PV system disconnecting means shall be installed at a readily accessible location."},
      {"id":"je-349", "question":"What labeling is required for a building with a PV system?", "options":["None required", "Warning sign at service indicating PV system present", "Output voltage only", "Installer information only"], "correct":1, "source":{"name":"NEC 2026 Article 690.56", "url":""}, "explanation":"Per NEC 690.56, a permanent plaque or directory identifying the PV system shall be installed at or near the service equipment and at each normal power source disconnect."},
      {"id":"je-350", "question":"Energy storage systems (batteries) connected to PV systems are covered by what article in addition to Article 690?", "options":["Article 480 only", "Article 480 and Article 706", "Article 700", "Article 705 only"], "correct":1, "source":{"name":"NEC 2026 Article 706, 690", "url":""}, "explanation":"Energy storage systems are covered by Article 706 for ESS requirements and Article 480 for stationary battery installations, in addition to Article 690 for PV-connected systems."},
      {"id":"je-351", "question":"Wind electric systems are covered by what NEC article?", "options":["Article 690", "Article 692", "Article 694", "Article 700"], "correct":2, "source":{"name":"NEC 2026 Article 694", "url":""}, "explanation":"NEC Article 694 covers small wind electric systems, including the wind turbine, tower, and the electric equipment."},
      {"id":"je-352", "question":"Fuel cell systems are covered by what NEC article?", "options":["Article 690", "Article 692", "Article 700", "Article 705"], "correct":1, "source":{"name":"NEC 2026 Article 692", "url":""}, "explanation":"NEC Article 692 covers fuel cell systems, including fuel cells and the means of connecting them to the electrical system."},
      {"id":"je-353", "question":"Critical operations power systems (COPS) are covered by what NEC article?", "options":["Article 700", "Article 701", "Article 705", "Article 708"], "correct":3, "source":{"name":"NEC 2026 Article 708", "url":""}, "explanation":"NEC Article 708 covers the installation, operation, and maintenance of critical operations power systems (COPS) for designated critical operations areas."},
      {"id":"je-354", "question":"What is the purpose of a Critical Operations Power System (COPS)?", "options":["Emergency egress lighting", "Powering public safety and government facilities that require continuous operation for national security, public safety, or business continuity", "Hospital emergency power", "Fire pump operation"], "correct":1, "source":{"name":"NEC 2026 Article 708.1", "url":""}, "explanation":"Per NEC 708.1, COPS are designated critical operations areas or facilities that require continuous operation for reasons of public safety, emergency management, national security, or business continuity."},
      {"id":"je-355", "question":"COPS wiring must be designed to remain functional for what period during a fire?", "options":["30 minutes", "1 hour", "2 hours", "As determined by risk assessment"], "correct":3, "source":{"name":"NEC 2026 Article 708.10", "url":""}, "explanation":"Per NEC 708.10, COPS wiring shall be designed to maintain critical operation during fire conditions based on the hazard risk assessment."},
      {"id":"je-356", "question":"What is the maximum voltage drop permitted for branch circuits per NEC recommendations?", "options":["2%", "3%", "5%", "8%"], "correct":1, "source":{"name":"NEC 2026 Article 210.19(A) Informational Note 4", "url":""}, "explanation":"Per NEC 210.19(A) Informational Note No. 4, conductors should be sized to prevent voltage drop exceeding 3% at the farthest outlet for branch circuits."},
      {"id":"je-357", "question":"What is the maximum total voltage drop permitted for feeders plus branch circuits combined?", "options":["3%", "4%", "5%", "8%"], "correct":2, "source":{"name":"NEC 2026 Article 210.19(A) Informational Note 4, 215.2(A) Informational Note 2", "url":""}, "explanation":"Per NEC informational notes, the maximum combined voltage drop for both feeders and branch circuits should not exceed 5%."},
      {"id":"je-358", "question":"The resistance of copper conductors increases with temperature. True or False?", "options":["True - resistance increases as temperature increases", "False - resistance decreases as temperature increases", "True - but only above 100°C", "False - temperature has no effect on resistance"], "correct":0, "source":{"name":"Electrical Theory", "url":""}, "explanation":"The resistance of copper conductors has a positive temperature coefficient, meaning resistance increases as temperature increases."},
      {"id":"je-359", "question":"What is the formula for calculating power in a DC circuit?", "options":["P = V × I", "P = V / I", "P = I / V", "P = V² / I"], "correct":0, "source":{"name":"Ohm's Law / Power Formula", "url":""}, "explanation":"Power in a DC circuit is calculated using P = V × I (Power = Voltage × Current), or equivalently P = I²R or P = V²/R."},
      {"id":"je-360", "question":"In a 3-phase balanced system, the line voltage is how many times the phase voltage in a wye configuration?", "options":["Equal", "√3 (1.732) times", "2 times", "3 times"], "correct":1, "source":{"name":"Electrical Theory - Three Phase", "url":""}, "explanation":"In a wye (Y) connected 3-phase system, the line voltage equals √3 (approximately 1.732) times the phase voltage."},
      {"id":"je-361", "question":"In a 3-phase balanced system, the line current equals the phase current in what configuration?", "options":["Delta", "Wye", "Both", "Neither"], "correct":1, "source":{"name":"Electrical Theory - Three Phase", "url":""}, "explanation":"In a wye (Y) connected 3-phase system, the line current equals the phase current. In a delta system, line current equals √3 times phase current."},
      {"id":"je-362", "question":"What is the formula for calculating three-phase power?", "options":["P = V × I", "P = √3 × V × I × PF", "P = 3 × V × I", "P = V × I × PF"], "correct":1, "source":{"name":"Electrical Theory - Three Phase Power", "url":""}, "explanation":"Three-phase power is calculated using P = √3 × VL × IL × PF, where VL is line voltage, IL is line current, and PF is power factor."},
      {"id":"je-363", "question":"What is the voltage between any two phases (line-to-line) in a 120/208V, 3-phase, 4-wire system?", "options":["120 volts", "208 volts", "240 volts", "277 volts"], "correct":1, "source":{"name":"Electrical Theory - Three Phase", "url":""}, "explanation":"In a 120/208V, 3-phase, 4-wire wye system, the line-to-line voltage is 208 volts (120V × √3 = 208V)."},
      {"id":"je-364", "question":"What is the voltage between phase and neutral in a 277/480V, 3-phase, 4-wire system?", "options":["208 volts", "240 volts", "277 volts", "480 volts"], "correct":2, "source":{"name":"Electrical Theory - Three Phase", "url":""}, "explanation":"In a 277/480V, 3-phase, 4-wire wye system, the line-to-neutral (phase) voltage is 277 volts."},
      {"id":"je-365", "question":"What is the line-to-line voltage in a 277/480V, 3-phase, 4-wire system?", "options":["277 volts", "400 volts", "480 volts", "600 volts"], "correct":2, "source":{"name":"Electrical Theory - Three Phase", "url":""}, "explanation":"In a 277/480V, 3-phase, 4-wire wye system, the line-to-line voltage is 480 volts (277V × √3 ≈ 480V)."},
      {"id":"je-366", "question":"A capacitor in an AC circuit causes the current to do what relative to voltage?", "options":["Lag voltage", "Lead voltage", "Be in phase with voltage", "Be 180° out of phase"], "correct":1, "source":{"name":"Electrical Theory - AC Circuits", "url":""}, "explanation":"In a capacitive circuit, current leads voltage. Remember: ELI the ICE man - In a capacitor (C), current (I) leads voltage (E)."},
      {"id":"je-367", "question":"An inductor in an AC circuit causes the current to do what relative to voltage?", "options":["Lag voltage", "Lead voltage", "Be in phase with voltage", "Be 180° out of phase"], "correct":0, "source":{"name":"Electrical Theory - AC Circuits", "url":""}, "explanation":"In an inductive circuit, current lags voltage. Remember: ELI the ICE man - In an inductor (L), voltage (E) leads current (I)."},
      {"id":"je-368", "question":"What is the unit of measurement for capacitance?", "options":["Henrys", "Farads", "Ohms", "Watts"], "correct":1, "source":{"name":"Electrical Theory", "url":""}, "explanation":"Capacitance is measured in farads (F). Common values are in microfarads (μF) or picofarads (pF)."},
      {"id":"je-369", "question":"What is the unit of measurement for inductance?", "options":["Henrys", "Farads", "Ohms", "Watts"], "correct":0, "source":{"name":"Electrical Theory", "url":""}, "explanation":"Inductance is measured in henrys (H). Common values are in millihenrys (mH) or microhenrys (μH)."},
      {"id":"je-370", "question":"What is the formula for inductive reactance?", "options":["XL = 2πfC", "XL = 2πfL", "XL = 1/(2πfL)", "XL = 1/(2πfC)"], "correct":1, "source":{"name":"Electrical Theory - AC Circuits", "url":""}, "explanation":"Inductive reactance XL = 2πfL, where f is frequency in Hz and L is inductance in henrys."},
      {"id":"je-371", "question":"What is the formula for capacitive reactance?", "options":["XC = 2πfC", "XC = 2πfL", "XC = 1/(2πfC)", "XC = 1/(2πfL)"], "correct":2, "source":{"name":"Electrical Theory - AC Circuits", "url":""}, "explanation":"Capacitive reactance XC = 1/(2πfC), where f is frequency in Hz and C is capacitance in farads."},
      {"id":"je-372", "question":"What is the formula for impedance in a series RL circuit?", "options":["Z = R + XL", "Z = √(R² + XL²)", "Z = R × XL", "Z = R - XL"], "correct":1, "source":{"name":"Electrical Theory - AC Circuits", "url":""}, "explanation":"In a series RL circuit, impedance Z = √(R² + XL²), where R is resistance and XL is inductive reactance."},
      {"id":"je-373", "question":"What is power factor?", "options":["The ratio of apparent power to real power", "The ratio of real power to apparent power", "The sum of real and reactive power", "The phase angle between voltage and current"], "correct":1, "source":{"name":"Electrical Theory - Power Factor", "url":""}, "explanation":"Power factor is the ratio of real power (watts) to apparent power (volt-amperes): PF = W/VA = cos θ, where θ is the phase angle."},
      {"id":"je-374", "question":"A power factor of 0.85 lagging indicates what type of load?", "options":["Resistive", "Capacitive", "Inductive", "No load"], "correct":2, "source":{"name":"Electrical Theory - Power Factor", "url":""}, "explanation":"A lagging power factor indicates an inductive load, where current lags voltage. Motors are a common cause of lagging power factor."},
      {"id":"je-375", "question":"Capacitor banks are often installed to do what to power factor?", "options":["Decrease it", "Correct (improve) it toward unity", "Make it lead", "Have no effect"], "correct":1, "source":{"name":"Electrical Theory - Power Factor Correction", "url":""}, "explanation":"Capacitor banks are installed to correct (improve) lagging power factor by adding leading reactive power to counteract the lagging reactive power of inductive loads."},
      {"id":"je-376", "question":"What happens to the current in a circuit when power factor improves from 0.7 to 1.0 with constant real power?", "options":["Current increases", "Current decreases", "Current stays the same", "Current becomes zero"], "correct":1, "source":{"name":"Electrical Theory - Power Factor", "url":""}, "explanation":"When power factor improves (increases toward 1.0), current decreases for the same real power delivery because P = V × I × PF, so I = P/(V × PF)."},
      {"id":"je-377", "question":"What is the apparent power when real power is 10 kW and power factor is 0.8?", "options":["8 kVA", "10 kVA", "12.5 kVA", "80 kVA"], "correct":2, "source":{"name":"Electrical Theory - Power", "url":""}, "explanation":"Apparent Power (kVA) = Real Power (kW) / Power Factor = 10 kW / 0.8 = 12.5 kVA."},
      {"id":"je-378", "question":"What is true power also called?", "options":["Reactive power", "Apparent power", "Real power or watts", "VA power"], "correct":2, "source":{"name":"Electrical Theory - Power", "url":""}, "explanation":"True power, also called real power, is the actual power consumed by the load and is measured in watts (W)."},
      {"id":"je-379", "question":"What is reactive power measured in?", "options":["Watts", "Volt-amperes (VA)", "Volt-amperes reactive (VAR)", "Kilowatt-hours"], "correct":2, "source":{"name":"Electrical Theory - Power", "url":""}, "explanation":"Reactive power is measured in volt-amperes reactive (VAR or kVAR). It represents power that oscillates between source and load without doing useful work."},
      {"id":"je-380", "question":"What is the relationship between kW, kVA, and kVAR in the power triangle?", "options":["kVA = kW + kVAR", "kVA² = kW² + kVAR²", "kW = kVA × kVAR", "kVAR = kVA / kW"], "correct":1, "source":{"name":"Electrical Theory - Power Triangle", "url":""}, "explanation":"In the power triangle, kVA² = kW² + kVAR², similar to the Pythagorean theorem. kVA is the hypotenuse, kW is adjacent, and kVAR is opposite."},
      {"id":"je-381", "question":"The ampacity of conductors must be reduced when more than how many current-carrying conductors are in the same raceway?", "options":["2", "3", "4", "6"], "correct":1, "source":{"name":"NEC 2026 Table 310.15(C)(1)", "url":""}, "explanation":"Per NEC Table 310.15(C)(1), ampacity adjustment factors must be applied when more than 3 current-carrying conductors are installed in the same raceway or cable."},
      {"id":"je-382", "question":"For 4-6 current-carrying conductors in a raceway, the ampacity adjustment factor is what?", "options":["70%", "80%", "85%", "90%"], "correct":1, "source":{"name":"NEC 2026 Table 310.15(C)(1)", "url":""}, "explanation":"Per NEC Table 310.15(C)(1), for 4-6 current-carrying conductors, the ampacity must be adjusted to 80% of the values in Table 310.16."},
      {"id":"je-383", "question":"For 7-9 current-carrying conductors in a raceway, the ampacity adjustment factor is what?", "options":["60%", "70%", "80%", "85%"], "correct":1, "source":{"name":"NEC 2026 Table 310.15(C)(1)", "url":""}, "explanation":"Per NEC Table 310.15(C)(1), for 7-9 current-carrying conductors, the ampacity must be adjusted to 70% of the values in Table 310.16."},
      {"id":"je-384", "question":"Equipment grounding conductors are counted as current-carrying conductors for ampacity adjustment. True or False?", "options":["True", "False - EGCs are not counted", "True, only if insulated", "False, only if bare"], "correct":1, "source":{"name":"NEC 2026 Article 310.15(E)", "url":""}, "explanation":"Per NEC 310.15(E), equipment grounding conductors are not counted when applying ampacity adjustment factors."},
      {"id":"je-385", "question":"A neutral conductor that carries only unbalanced current in a 3-phase, 4-wire wye system is counted as a current-carrying conductor. True or False?", "options":["True", "False - not counted when carrying only unbalanced current", "Always counted", "Only counted if over 10% unbalanced"], "correct":1, "source":{"name":"NEC 2026 Article 310.15(E)", "url":""}, "explanation":"Per NEC 310.15(E), a neutral conductor that carries only the unbalanced current from other conductors of the same circuit is not counted."},
      {"id":"je-386", "question":"When is a neutral conductor counted as a current-carrying conductor?", "options":["Never", "When supplying nonlinear loads that produce harmonic currents exceeding 50%", "Always in commercial buildings", "Only for 200A and larger services"], "correct":1, "source":{"name":"NEC 2026 Article 310.15(E)", "url":""}, "explanation":"Per NEC 310.15(E), a neutral conductor is counted when more than 50% of the neutral current is determined to consist of harmonic currents, as with nonlinear loads."},
      {"id":"je-387", "question":"Ambient temperature correction factors apply when the ambient temperature exceeds what value for conductors rated 90°C?", "options":["20°C (68°F)", "30°C (86°F)", "35°C (95°F)", "40°C (104°F)"], "correct":1, "source":{"name":"NEC 2026 Table 310.15(B)(1)", "url":""}, "explanation":"Per NEC Table 310.15(B)(1), ampacity correction factors apply when ambient temperature exceeds 30°C (86°F) for conductors rated 60°C through 90°C."},
      {"id":"je-388", "question":"Conductors in attic spaces above thermal insulation without maintained clearance must have their ampacity calculated at what ambient temperature?", "options":["30°C", "40°C", "50°C", "60°C"], "correct":3, "source":{"name":"NEC 2026 Article 310.15(B)(4)(a)", "url":""}, "explanation":"Per NEC 310.15(B)(4)(a), conductors in attic spaces without maintained clearance above thermal insulation shall have their ampacity determined based on a 60°C ambient."},
      {"id":"je-389", "question":"What is the maximum fill percentage for a raceway containing 3 or more conductors?", "options":["31%", "40%", "53%", "60%"], "correct":1, "source":{"name":"NEC 2026 Chapter 9, Table 1", "url":""}, "explanation":"Per NEC Chapter 9, Table 1, the maximum fill for 3 or more conductors in a raceway is 40% of the raceway's cross-sectional area."},
      {"id":"je-390", "question":"What is the maximum fill percentage for a raceway containing 2 conductors?", "options":["31%", "40%", "53%", "60%"], "correct":0, "source":{"name":"NEC 2026 Chapter 9, Table 1", "url":""}, "explanation":"Per NEC Chapter 9, Table 1, the maximum fill for 2 conductors in a raceway is 31% of the raceway's cross-sectional area."},
      {"id":"je-391", "question":"What is the maximum fill percentage for a raceway containing 1 conductor?", "options":["31%", "40%", "53%", "60%"], "correct":2, "source":{"name":"NEC 2026 Chapter 9, Table 1", "url":""}, "explanation":"Per NEC Chapter 9, Table 1, the maximum fill for 1 conductor in a raceway is 53% of the raceway's cross-sectional area."},
      {"id":"je-392", "question":"What is the maximum length of EMT permitted in any trade size?", "options":["6 feet", "10 feet", "No maximum length specified", "25 feet"], "correct":2, "source":{"name":"NEC 2026 Article 358", "url":""}, "explanation":"The NEC does not specify a maximum length for EMT runs. However, practical considerations and the total number of bends (360° maximum) limit run lengths."},
      {"id":"je-393", "question":"What is the maximum number of degrees of bends permitted between pull points in a raceway run?", "options":["180 degrees", "270 degrees", "360 degrees", "No limit"], "correct":2, "source":{"name":"NEC 2026 Article 358.26", "url":""}, "explanation":"Per NEC 358.26 (EMT) and similar articles for other raceways, there shall not be more than the equivalent of four quarter bends (360 degrees total) between pull points."},
      {"id":"je-394", "question":"EMT shall be securely fastened within what distance of each outlet box or termination?", "options":["3 feet", "4 feet", "5 feet", "6 feet"], "correct":0, "source":{"name":"NEC 2026 Article 358.30(A)", "url":""}, "explanation":"Per NEC 358.30(A), EMT shall be securely fastened within 3 feet (900 mm) of each outlet box, junction box, device box, cabinet, conduit body, or other tubing termination."},
      {"id":"je-395", "question":"EMT shall be supported at intervals not exceeding what distance?", "options":["4 feet", "6 feet", "8 feet", "10 feet"], "correct":3, "source":{"name":"NEC 2026 Article 358.30(A)", "url":""}, "explanation":"Per NEC 358.30(A), EMT shall be supported at intervals not exceeding 10 feet (3 m)."},
      {"id":"je-396", "question":"Rigid metal conduit (RMC) shall be secured within what distance of each outlet box or termination?", "options":["3 feet", "4 feet", "5 feet", "6 feet"], "correct":0, "source":{"name":"NEC 2026 Article 344.30(A)", "url":""}, "explanation":"Per NEC 344.30(A), RMC shall be securely fastened within 3 feet (900 mm) of each outlet box, junction box, device box, cabinet, conduit body, or other termination."},
      {"id":"je-397", "question":"Rigid metal conduit (RMC) shall be supported at intervals not exceeding what distance?", "options":["4 feet", "6 feet", "8 feet", "10 feet"], "correct":3, "source":{"name":"NEC 2026 Article 344.30(A)", "url":""}, "explanation":"Per NEC 344.30(A), RMC shall be supported at intervals not exceeding 10 feet (3 m)."},
      {"id":"je-398", "question":"What is the minimum bending radius for EMT when a one-shot bender is used?", "options":["4 times the trade size", "6 times the trade size", "Per Table 2 of Chapter 9", "10 times the trade size"], "correct":2, "source":{"name":"NEC 2026 Article 358.24", "url":""}, "explanation":"Per NEC 358.24, bends in EMT shall be made so that the tubing is not damaged and the internal diameter is not effectively reduced. Table 2 of Chapter 9 provides minimum bending radii."},
      {"id":"je-399", "question":"Flexible metal conduit (FMC) is required to be secured within what distance of termination points?", "options":["8 inches", "12 inches", "18 inches", "24 inches"], "correct":1, "source":{"name":"NEC 2026 Article 348.30(A)", "url":""}, "explanation":"Per NEC 348.30(A), FMC shall be securely fastened within 12 inches (300 mm) of each outlet box, junction box, cabinet, or fitting."},
      {"id":"je-400", "question":"Flexible metal conduit (FMC) shall be supported at intervals not exceeding what distance?", "options":["3 feet", "4 feet", "4.5 feet", "6 feet"], "correct":2, "source":{"name":"NEC 2026 Article 348.30(A)", "url":""}, "explanation":"Per NEC 348.30(A), FMC shall be supported at intervals not exceeding 4.5 feet (1.4 m)."},
      {"id":"je-401", "question":"Liquidtight flexible metal conduit (LFMC) is permitted to be used as an equipment grounding conductor when what length or less?", "options":["3 feet", "4 feet", "6 feet", "8 feet"], "correct":2, "source":{"name":"NEC 2026 Article 350.60", "url":""}, "explanation":"Per NEC 350.60, LFMC is permitted as an equipment grounding conductor when 6 feet (1.8 m) or less and the circuit conductors are protected by overcurrent devices rated 60 amperes or less."},
      {"id":"je-402", "question":"PVC conduit (Schedule 40) is permitted in what locations?", "options":["Exposed in hazardous locations only", "Concealed and exposed locations, subject to physical damage restrictions", "Underground only", "Wet locations only"], "correct":1, "source":{"name":"NEC 2026 Article 352.10", "url":""}, "explanation":"Per NEC 352.10, PVC conduit is permitted in concealed and exposed locations with certain restrictions on physical damage and support requirements."},
      {"id":"je-403", "question":"PVC conduit exposed to sunlight must be identified as what?", "options":["Schedule 80", "Sunlight resistant or protected from sunlight", "Gray color only", "UV stabilized"], "correct":1, "source":{"name":"NEC 2026 Article 352.10(G)", "url":""}, "explanation":"Per NEC 352.10(G), PVC conduit exposed to sunlight shall be listed as sunlight resistant or be protected from sunlight by design of the raceway or mounting."},
      {"id":"je-404", "question":"What is the expansion rate consideration for PVC conduit runs exceeding 25 feet?", "options":["No consideration needed", "Must use expansion fittings where temperature change exceeds 30°F", "Must be underground only", "Must use Schedule 80"], "correct":1, "source":{"name":"NEC 2026 Article 352.44", "url":""}, "explanation":"Per NEC 352.44, expansion fittings shall be provided to compensate for thermal expansion and contraction where the length change is expected to exceed 6 mm (¼ inch)."},
      {"id":"je-405", "question":"Type MC cable must be secured within what distance of each box or termination?", "options":["6 inches", "12 inches", "18 inches", "24 inches"], "correct":1, "source":{"name":"NEC 2026 Article 330.30(B)", "url":""}, "explanation":"Per NEC 330.30(B), Type MC cable shall be secured within 12 inches (300 mm) of every box, cabinet, fitting, or other cable termination."},
      {"id":"je-406", "question":"Type MC cable shall be supported at intervals not exceeding what distance?", "options":["4 feet", "4.5 feet", "6 feet", "8 feet"], "correct":2, "source":{"name":"NEC 2026 Article 330.30(C)", "url":""}, "explanation":"Per NEC 330.30(C), Type MC cable shall be supported at intervals not exceeding 6 feet (1.8 m)."},
      {"id":"je-407", "question":"Type AC cable (BX) must be secured within what distance of each box or termination?", "options":["6 inches", "8 inches", "12 inches", "18 inches"], "correct":2, "source":{"name":"NEC 2026 Article 320.30(B)", "url":""}, "explanation":"Per NEC 320.30(B), Type AC cable shall be secured within 12 inches (300 mm) of every outlet box, junction box, cabinet, or fitting."},
      {"id":"je-408", "question":"Type AC cable (BX) requires what additional component inside the armor at terminations?", "options":["Grounding bushing", "Anti-short bushing (red head)", "Cable clamp only", "Bonding jumper"], "correct":1, "source":{"name":"NEC 2026 Article 320.40", "url":""}, "explanation":"Per NEC 320.40, an insulating bushing or equivalent protection (anti-short bushing) shall be provided between conductors and armor at terminations."},
      {"id":"je-409", "question":"A junction box cover must be accessible. What does accessible mean in this context?", "options":["Visible", "Capable of being removed without damaging the building structure", "Within 6 feet of floor", "In a readily accessible location"], "correct":1, "source":{"name":"NEC 2026 Article 314.29", "url":""}, "explanation":"Per NEC 314.29, junction boxes shall be installed so that the wiring can be rendered accessible without removing any part of the building or exposing the conductors."},
      {"id":"je-410", "question":"What is the maximum box fill volume for a 4-inch square metal box with a 1-1/2 inch depth?", "options":["18 cu. in.", "21 cu. in.", "30.3 cu. in.", "42 cu. in."], "correct":1, "source":{"name":"NEC 2026 Table 314.16(A)", "url":""}, "explanation":"Per NEC Table 314.16(A), a 4-inch square metal box with a 1-1/2 inch depth has a volume of 21.0 cubic inches."},
      {"id":"je-411", "question":"What is the volume allowance for a #14 AWG conductor in box fill calculations?", "options":["1.75 cu. in.", "2.00 cu. in.", "2.25 cu. in.", "2.50 cu. in."], "correct":1, "source":{"name":"NEC 2026 Table 314.16(B)", "url":""}, "explanation":"Per NEC Table 314.16(B), each #14 AWG conductor requires 2.00 cubic inches of box volume."},
      {"id":"je-412", "question":"When counting conductors for box fill, how many conductor volumes does a device (switch or receptacle) require?", "options":["1 conductor volume", "2 conductor volumes based on largest conductor connected to device", "3 conductor volumes", "No additional volume needed"], "correct":1, "source":{"name":"NEC 2026 Article 314.16(B)(4)", "url":""}, "explanation":"Per NEC 314.16(B)(4), a single volume allowance based on the largest conductor connected to a device shall be made for each yoke or strap containing one or more devices."},
      {"id":"je-413", "question":"All equipment grounding conductors in a box count as how many conductors for box fill?", "options":["Zero", "One conductor volume based on largest EGC", "The actual number of EGCs", "Two conductor volumes"], "correct":1, "source":{"name":"NEC 2026 Article 314.16(B)(5)", "url":""}, "explanation":"Per NEC 314.16(B)(5), a single volume allowance based on the largest equipment grounding conductor entering the box shall be made for all equipment grounding conductors."},
      {"id":"je-414", "question":"Cable clamps in a box count as how many conductor volumes?", "options":["Zero - no allowance needed", "One or more conductor volumes based on largest conductor", "One conductor volume total for all clamps", "Two conductor volumes per clamp"], "correct":2, "source":{"name":"NEC 2026 Article 314.16(B)(2)", "url":""}, "explanation":"Per NEC 314.16(B)(2), a single volume allowance based on the largest conductor in the box shall be made for one or more cable clamps."},
      {"id":"je-415", "question":"What is the minimum length of free conductor required at each box or device?", "options":["3 inches", "6 inches", "8 inches", "12 inches"], "correct":1, "source":{"name":"NEC 2026 Article 300.14", "url":""}, "explanation":"Per NEC 300.14, at least 6 inches (150 mm) of free conductor, measured from the point where it emerges from its raceway or cable sheath, shall be left at each outlet and switch point."},
      {"id":"je-416", "question":"What is the minimum length of free conductor required to extend outside the box opening for splices or device terminations?", "options":["2 inches", "3 inches", "4 inches", "6 inches"], "correct":1, "source":{"name":"NEC 2026 Article 300.14", "url":""}, "explanation":"Per NEC 300.14, conductors shall extend at least 3 inches (75 mm) outside the box opening for splices and terminations."},
      {"id":"je-417", "question":"Conductors in vertical raceways shall be supported at intervals not exceeding what, based on conductor size?", "options":["25 feet for #1/0 and smaller", "As specified in Table 300.19(A)", "100 feet", "Every floor level"], "correct":1, "source":{"name":"NEC 2026 Article 300.19(A)", "url":""}, "explanation":"Per NEC 300.19(A) and Table 300.19(A), conductors in vertical raceways shall be supported at intervals not greater than those specified in the table based on conductor size."},
      {"id":"je-418", "question":"Underground service conductors that are not encased in concrete must be buried at least how deep under a driveway?", "options":["12 inches", "18 inches", "24 inches", "30 inches"], "correct":2, "source":{"name":"NEC 2026 Table 300.5", "url":""}, "explanation":"Per NEC Table 300.5, direct burial cables or conductors not in rigid conduit under driveways require a minimum burial depth of 24 inches."},
      {"id":"je-419", "question":"Underground conductors in rigid metal conduit (RMC) must be buried at least how deep?", "options":["0 inches", "6 inches", "12 inches", "18 inches"], "correct":1, "source":{"name":"NEC 2026 Table 300.5", "url":""}, "explanation":"Per NEC Table 300.5, circuits in rigid metal conduit (RMC) require a minimum burial depth of 6 inches."},
      {"id":"je-420", "question":"Underground conductors in PVC conduit must be buried at least how deep under a lawn?", "options":["6 inches", "12 inches", "18 inches", "24 inches"], "correct":2, "source":{"name":"NEC 2026 Table 300.5", "url":""}, "explanation":"Per NEC Table 300.5, circuits in rigid PVC conduit require a minimum burial depth of 18 inches."},
      {"id":"je-421", "question":"When conductors emerge from the ground, protection must extend to at least what height above finished grade?", "options":["6 inches", "8 inches", "12 inches", "18 inches"], "correct":1, "source":{"name":"NEC 2026 Article 300.5(D)", "url":""}, "explanation":"Per NEC 300.5(D), direct-buried conductors or cables emerging from the ground shall be protected by enclosures or raceways extending from the minimum cover depth to a point at least 8 feet above finished grade."},
      {"id":"je-422", "question":"What is the minimum clearance for service drop conductors over a residential driveway?", "options":["10 feet", "12 feet", "15 feet", "18 feet"], "correct":1, "source":{"name":"NEC 2026 Article 230.24(B)", "url":""}, "explanation":"Per NEC 230.24(B)(1), service drop conductors shall have a minimum clearance of 12 feet over residential property and driveways."},
      {"id":"je-423", "question":"What is the minimum clearance for service drop conductors over a public street?", "options":["12 feet", "15 feet", "18 feet", "20 feet"], "correct":2, "source":{"name":"NEC 2026 Article 230.24(B)", "url":""}, "explanation":"Per NEC 230.24(B)(4), service drop conductors shall have a minimum clearance of 18 feet over public streets, alleys, roads, and driveways subject to truck traffic."},
      {"id":"je-424", "question":"Service entrance conductors must be installed above the point of attachment. What is the minimum clearance above the roof?", "options":["2 feet", "3 feet", "4 feet", "8 feet"], "correct":1, "source":{"name":"NEC 2026 Article 230.24(A)", "url":""}, "explanation":"Per NEC 230.24(A), overhead service conductors shall have a vertical clearance of not less than 3 feet (900 mm) above the roof surface, with exceptions for low-slope roofs and other conditions."},
      {"id":"je-425", "question":"Service entrance cables must be supported within what distance of the service head?", "options":["6 inches", "12 inches", "18 inches", "24 inches"], "correct":1, "source":{"name":"NEC 2026 Article 230.51(A)", "url":""}, "explanation":"Per NEC 230.51(A), service cables shall be supported within 12 inches (300 mm) of the service head and at intervals not exceeding 30 inches (750 mm)."},
      {"id":"je-426", "question":"A service point is defined as what?", "options":["The meter base location", "The point of connection between utility facilities and the premises wiring", "The main disconnect", "The transformer location"], "correct":1, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, the service point is the point of connection between the facilities of the serving utility and the premises wiring."},
      {"id":"je-427", "question":"The service disconnecting means must be located where?", "options":["Inside the building only", "At the nearest accessible location to the point of entrance of service conductors", "At the meter", "On the utility pole"], "correct":1, "source":{"name":"NEC 2026 Article 230.70(A)(1)", "url":""}, "explanation":"Per NEC 230.70(A)(1), the service disconnecting means shall be installed at a readily accessible location either outside the building or inside nearest the point of entrance of the service conductors."},
      {"id":"je-428", "question":"A dwelling unit's disconnecting means is required to be installed in a location that is what?", "options":["In the garage", "On the exterior or inside at nearest point of entrance", "In the basement", "At the service panel only"], "correct":1, "source":{"name":"NEC 2026 Article 230.85", "url":""}, "explanation":"Per NEC 230.85, for dwelling units, an emergency disconnect shall be installed in a readily accessible outdoor location."},
      {"id":"je-429", "question":"What marking is required on an emergency disconnect for a dwelling unit?", "options":["'Main Disconnect'", "'Service Disconnect'", "'Emergency Disconnect'", "'Emergency Disconnect, Service Disconnect, or a similar marking'"], "correct":3, "source":{"name":"NEC 2026 Article 230.85(E)", "url":""}, "explanation":"Per NEC 230.85(E), the emergency disconnect shall be marked as 'EMERGENCY DISCONNECT', 'SERVICE DISCONNECT', or a similar approved marking."},
      {"id":"je-430", "question":"What is the minimum rating for a single service disconnect for a dwelling?", "options":["60 amps", "100 amps", "150 amps", "200 amps"], "correct":1, "source":{"name":"NEC 2026 Article 230.79(C)", "url":""}, "explanation":"Per NEC 230.79(C), a single service disconnect for a one-family dwelling shall have a rating of not less than 100 amperes, 3-wire."},
      {"id":"je-431", "question":"AFCI protection is required for branch circuits supplying outlets in what areas of dwelling units?", "options":["Bathrooms and garages", "Kitchens, family rooms, dining rooms, living rooms, parlors, libraries, dens, bedrooms, sunrooms, recreation rooms, closets, hallways, laundry areas, or similar rooms or areas", "Outdoor areas only", "All areas including bathrooms"], "correct":1, "source":{"name":"NEC 2026 Article 210.12(A)", "url":""}, "explanation":"Per NEC 210.12(A), AFCI protection is required for 120-volt branch circuits supplying outlets and devices in the listed areas, which covers most living spaces except bathrooms and garages."},
      {"id":"je-432", "question":"AFCI and GFCI protection are not required for what type of device per NEC exceptions?", "options":["Kitchen receptacles", "Fire alarm systems not readily accessible", "Outdoor receptacles", "Bedroom receptacles"], "correct":1, "source":{"name":"NEC 2026 Article 210.12, 210.8 Exceptions", "url":""}, "explanation":"Per NEC exceptions, certain fire alarm circuits, security systems, and equipment that are not readily accessible or require continuous power have AFCI and GFCI protection exceptions."},
      {"id":"je-433", "question":"Tamper-resistant receptacles are required in what locations?", "options":["Commercial buildings only", "All dwelling unit receptacles, child care facilities, pediatric areas in hospitals, and other specific locations", "Outdoor areas only", "Bathrooms only"], "correct":1, "source":{"name":"NEC 2026 Article 406.12", "url":""}, "explanation":"Per NEC 406.12, tamper-resistant receptacles shall be installed in dwelling units, guest rooms, child care facilities, pediatric areas in hospitals, and other locations where children may be present."},
      {"id":"je-434", "question":"Weather-resistant receptacles are required in what locations?", "options":["All outdoor locations", "Damp locations and wet locations", "Underground vaults", "Covered porches only"], "correct":1, "source":{"name":"NEC 2026 Article 406.9", "url":""}, "explanation":"Per NEC 406.9, receptacles installed in damp locations and wet locations shall be a listed weather-resistant type."},
      {"id":"je-435", "question":"Receptacle outlet covers in wet locations must provide what type of protection?", "options":["Protection from rain when unattended", "Protection when the attachment plug is inserted or removed", "Listed extra-duty in-use cover providing protection with plug inserted", "Standard weatherproof cover"], "correct":2, "source":{"name":"NEC 2026 Article 406.9(B)(1)", "url":""}, "explanation":"Per NEC 406.9(B)(1), receptacles in wet locations shall have an enclosure that is weatherproof whether or not the attachment plug cap is inserted, requiring an 'in-use' or 'while-in-use' cover."},
      {"id":"je-436", "question":"Outdoor receptacles must be located not more than how many feet from the grade-level entrance to a dwelling?", "options":["3 feet", "6.5 feet", "10 feet", "One outlet at front and back is required"], "correct":3, "source":{"name":"NEC 2026 Article 210.52(E)(1)", "url":""}, "explanation":"Per NEC 210.52(E)(1), at least one receptacle outlet readily accessible from grade shall be installed at the front and back of each dwelling unit with direct access to grade."},
      {"id":"je-437", "question":"A dedicated 20-ampere circuit is required for what appliance in a dwelling?", "options":["Refrigerator", "Microwave", "Laundry room receptacle", "Garbage disposal"], "correct":2, "source":{"name":"NEC 2026 Article 210.11(C)(2)", "url":""}, "explanation":"Per NEC 210.11(C)(2), in addition to the number of branch circuits required, at least one 20-ampere branch circuit shall be provided for the laundry receptacle outlet."},
      {"id":"je-438", "question":"How many 20-amp small appliance circuits are required in a dwelling kitchen?", "options":["1", "2", "3", "4"], "correct":1, "source":{"name":"NEC 2026 Article 210.52(B)(1)", "url":""}, "explanation":"Per NEC 210.52(B)(1), a minimum of two 20-ampere small-appliance branch circuits shall serve the receptacle outlets in the kitchen, pantry, breakfast room, dining room, or similar area."},
      {"id":"je-439", "question":"Countertop receptacles in kitchens must be spaced so that no point along the wall line is more than how far from a receptacle?", "options":["12 inches", "24 inches", "36 inches", "48 inches"], "correct":1, "source":{"name":"NEC 2026 Article 210.52(C)(1)", "url":""}, "explanation":"Per NEC 210.52(C)(1), receptacle outlets shall be installed so that no point along the wall line is more than 24 inches (600 mm) measured horizontally from a receptacle outlet."},
      {"id":"je-440", "question":"A receptacle outlet is required for any countertop space that is how wide or wider?", "options":["6 inches", "9 inches", "12 inches", "18 inches"], "correct":2, "source":{"name":"NEC 2026 Article 210.52(C)(1)", "url":""}, "explanation":"Per NEC 210.52(C)(1), countertop receptacle outlets shall be installed for each wall counter space 12 inches (300 mm) or wider."},
      {"id":"je-441", "question":"Island countertops require a receptacle if the counter is how large?", "options":["12 x 12 inches", "12 x 24 inches", "24 x 12 inches minimum with no dimension less than 12 inches", "Any size requires a receptacle"], "correct":2, "source":{"name":"NEC 2026 Article 210.52(C)(2)", "url":""}, "explanation":"Per NEC 210.52(C)(2), at least one receptacle outlet shall be installed for each island countertop space with a long dimension of 24 inches (600 mm) or greater and a short dimension of 12 inches (300 mm) or greater."},
      {"id":"je-442", "question":"Peninsula countertops require a receptacle if they have a long dimension of at least how many inches?", "options":["12 inches", "18 inches", "24 inches", "36 inches"], "correct":2, "source":{"name":"NEC 2026 Article 210.52(C)(3)", "url":""}, "explanation":"Per NEC 210.52(C)(3), at least one receptacle outlet shall be installed for each peninsular countertop space with a long dimension of 24 inches (600 mm) or greater and a short dimension of 12 inches (300 mm) or greater."},
      {"id":"je-443", "question":"Bathroom receptacles must be supplied by a circuit that serves what?", "options":["Any room in the dwelling", "Only bathrooms (one or more)", "Only the bathroom where the receptacle is located", "Bathrooms and adjacent hallways"], "correct":1, "source":{"name":"NEC 2026 Article 210.11(C)(3)", "url":""}, "explanation":"Per NEC 210.11(C)(3), the 20-ampere bathroom branch circuit shall be permitted to supply a single bathroom or multiple bathrooms."},
      {"id":"je-444", "question":"At least one bathroom receptacle must be located within what distance of the outside edge of each basin?", "options":["12 inches", "24 inches", "3 feet", "6 feet"], "correct":2, "source":{"name":"NEC 2026 Article 210.52(D)", "url":""}, "explanation":"Per NEC 210.52(D), at least one wall receptacle outlet shall be installed within 3 feet (900 mm) of the outside edge of each basin."},
      {"id":"je-445", "question":"Hallways 10 feet or longer require how many receptacle outlets?", "options":["None", "At least one", "At least two", "One every 6 feet"], "correct":1, "source":{"name":"NEC 2026 Article 210.52(H)", "url":""}, "explanation":"Per NEC 210.52(H), in dwelling units, hallways of 10 feet (3.0 m) or more in length shall have at least one receptacle outlet."},
      {"id":"je-446", "question":"A garage receptacle outlet is required for each vehicle space. True or False?", "options":["True - one GFCI outlet for each car space", "False - at least one receptacle per attached garage is required", "True - one outlet per 200 sq ft", "False - no garage receptacles required"], "correct":1, "source":{"name":"NEC 2026 Article 210.52(G)(1)", "url":""}, "explanation":"Per NEC 210.52(G)(1), at least one receptacle outlet shall be installed in each attached garage and each detached garage with electric power."},
      {"id":"je-447", "question":"What is the maximum height for a receptacle outlet serving a washing machine?", "options":["No height restriction", "4 feet", "5 feet", "6 feet"], "correct":0, "source":{"name":"NEC 2026 Article 210.52", "url":""}, "explanation":"The NEC does not specify a maximum height for laundry receptacles, but they are typically installed at accessible heights. Local codes may have specific requirements."},
      {"id":"je-448", "question":"A dwelling unit with 2000 square feet of living space requires how much general lighting load for calculation purposes?", "options":["2000 VA", "4000 VA", "6000 VA", "8000 VA"], "correct":2, "source":{"name":"NEC 2026 Table 220.12", "url":""}, "explanation":"Per NEC Table 220.12, dwelling units require 3 VA per square foot for general lighting load calculations. 2000 sq ft × 3 VA = 6000 VA."},
      {"id":"je-449", "question":"How many VA must be included for each small appliance circuit in dwelling load calculations?", "options":["1000 VA", "1500 VA", "2000 VA", "3000 VA"], "correct":1, "source":{"name":"NEC 2026 Article 220.52(A)", "url":""}, "explanation":"Per NEC 220.52(A), a load of not less than 1500 VA shall be included for each 2-wire small-appliance branch circuit."},
      {"id":"je-450", "question":"How many VA must be included for the laundry circuit in dwelling load calculations?", "options":["1000 VA", "1500 VA", "2000 VA", "2500 VA"], "correct":1, "source":{"name":"NEC 2026 Article 220.52(B)", "url":""}, "explanation":"Per NEC 220.52(B), a load of not less than 1500 VA shall be included for the laundry branch circuit."},
      {"id":"je-451", "question":"After applying demand factors, what is the first 10 kW of combined general lighting, small appliance, and laundry loads calculated at?", "options":["50%", "70%", "100%", "125%"], "correct":2, "source":{"name":"NEC 2026 Table 220.42", "url":""}, "explanation":"Per NEC Table 220.42, the first 10,000 VA of general lighting, small appliance, and laundry load is calculated at 100%."},
      {"id":"je-452", "question":"What demand factor applies to the portion of general lighting load exceeding 10 kW in dwelling units?", "options":["35%", "50%", "70%", "100%"], "correct":0, "source":{"name":"NEC 2026 Table 220.42", "url":""}, "explanation":"Per NEC Table 220.42, the portion of general lighting, small appliance, and laundry load over 10,000 VA is calculated at 35%."},
      {"id":"je-453", "question":"What is the demand load for one household electric range rated up to 12 kW?", "options":["6 kW", "8 kW", "10 kW", "12 kW"], "correct":1, "source":{"name":"NEC 2026 Table 220.55", "url":""}, "explanation":"Per NEC Table 220.55, Column C, the maximum demand for one electric range not over 12 kW is 8 kW."},
      {"id":"je-454", "question":"Four or more electric dryers in a dwelling have a demand factor of what percent?", "options":["70%", "75%", "80%", "100%"], "correct":1, "source":{"name":"NEC 2026 Table 220.54", "url":""}, "explanation":"Per NEC Table 220.54, four or more household clothes dryers have a demand factor of 75%."},
      {"id":"je-455", "question":"What is the standard demand load used for a household electric clothes dryer?", "options":["3000 watts or nameplate, whichever is larger", "4000 watts or nameplate, whichever is larger", "5000 watts or nameplate, whichever is larger", "Nameplate rating only"], "correct":2, "source":{"name":"NEC 2026 Article 220.54", "url":""}, "explanation":"Per NEC 220.54, the load for household electric clothes dryers shall be either 5000 watts or the nameplate rating, whichever is larger."},
      {"id":"je-456", "question":"What demand factor applies to the first 10 kW of electric space heating equipment in a dwelling unit?", "options":["65%", "75%", "100%", "No demand factor permitted"], "correct":2, "source":{"name":"NEC 2026 Article 220.51", "url":""}, "explanation":"Per NEC 220.51, fixed electric space heating loads are calculated at 100% of the connected load."},
      {"id":"je-457", "question":"What size circuit is required for a 9.6 kW household electric range?", "options":["30-amp", "40-amp", "50-amp", "60-amp"], "correct":1, "source":{"name":"NEC 2026 Article 210.19(A)(3)", "url":""}, "explanation":"Per NEC 210.19(A)(3), the branch circuit rating for household ranges 8.75 kW or more shall be 40 amperes."},
      {"id":"je-458", "question":"Air conditioning and heating loads can be calculated using what method when they are not operated simultaneously?", "options":["Add both loads at 100%", "Use the larger load only", "Use 75% of combined loads", "Use 50% of each load"], "correct":1, "source":{"name":"NEC 2026 Article 220.60", "url":""}, "explanation":"Per NEC 220.60, when air conditioning and heating equipment are unlikely to operate simultaneously, only the larger load needs to be used in the calculation."},
      {"id":"je-459", "question":"The neutral conductor for a 3-wire service can be sized at what percentage of the ungrounded conductors when over 200A?", "options":["70%", "75%", "80%", "100%"], "correct":0, "source":{"name":"NEC 2026 Article 220.61(B)", "url":""}, "explanation":"Per NEC 220.61(B), the neutral load over 200A can be calculated at 70% due to demand factor for balanced loads."},
      {"id":"je-460", "question":"A 200-amp service using 3/0 copper THW conductors requires what minimum size copper grounding electrode conductor?", "options":["#8 AWG", "#6 AWG", "#4 AWG", "#2 AWG"], "correct":2, "source":{"name":"NEC 2026 Table 250.66", "url":""}, "explanation":"Per NEC Table 250.66, for copper service entrance conductors from 1/0 through 3/0, the minimum copper grounding electrode conductor size is #4 AWG."},
      {"id":"je-461", "question":"Wire connectors (wire nuts) must be suitable for what when used with aluminum conductors?", "options":["High temperature", "Outdoor use", "Use with aluminum conductors specifically", "Underground use"], "correct":2, "source":{"name":"NEC 2026 Article 110.14(B)", "url":""}, "explanation":"Per NEC 110.14(B), connectors and terminals for use with aluminum conductors shall be suitable for the specific use."},
      {"id":"je-462", "question":"What is the temperature rating that shall be used for conductor ampacity when connected to equipment with 60°C terminals?", "options":["60°C", "75°C", "90°C", "Highest conductor rating"], "correct":0, "source":{"name":"NEC 2026 Article 110.14(C)", "url":""}, "explanation":"Per NEC 110.14(C), the ampacity of conductors shall be limited to the lowest temperature rating of any connected termination, so 60°C terminals require using the 60°C ampacity column."},
      {"id":"je-463", "question":"For circuits rated 100 amperes or less, equipment terminal temperature ratings are presumed to be what unless marked otherwise?", "options":["60°C", "75°C", "90°C", "60°C or 75°C"], "correct":3, "source":{"name":"NEC 2026 Article 110.14(C)(1)(a)", "url":""}, "explanation":"Per NEC 110.14(C)(1)(a), equipment terminations for circuits rated 100 amperes or less are designed for use on conductors with 60°C or 75°C ampacities unless marked otherwise."},
      {"id":"je-464", "question":"For circuits rated over 100 amperes, equipment terminal temperature ratings are presumed to be what unless marked otherwise?", "options":["60°C", "75°C", "90°C", "60°C or 75°C"], "correct":1, "source":{"name":"NEC 2026 Article 110.14(C)(1)(b)", "url":""}, "explanation":"Per NEC 110.14(C)(1)(b), equipment terminations for circuits over 100 amperes are designed for use with conductors with 75°C ampacities unless marked otherwise."},
      {"id":"je-465", "question":"Splices and taps in conductors shall be made with devices that are what?", "options":["UL listed only", "Listed or identified for the use", "Approved by the utility", "Copper or aluminum rated"], "correct":1, "source":{"name":"NEC 2026 Article 110.14(B)", "url":""}, "explanation":"Per NEC 110.14(B), splices and taps shall be made with devices identified for the use or by splicing methods identified for the use."},
      {"id":"je-466", "question":"Torque values for electrical connections shall be established by what?", "options":["The installer", "Manufacturer's installation instructions", "Local codes only", "OSHA standards"], "correct":1, "source":{"name":"NEC 2026 Article 110.14(D)", "url":""}, "explanation":"Per NEC 110.14(D), tightening torque values shall be as indicated on equipment or installation instructions provided by the manufacturer."},
      {"id":"je-467", "question":"What is the minimum illumination level required at service equipment, switchboards, and motor control centers?", "options":["No illumination required", "Adequate illumination", "50 foot-candles", "100 foot-candles"], "correct":1, "source":{"name":"NEC 2026 Article 110.26(D)", "url":""}, "explanation":"Per NEC 110.26(D), illumination shall be provided for all working spaces about service equipment, switchboards, switchgear, panelboards, and motor control centers installed indoors."},
      {"id":"je-468", "question":"Equipment rated 1200 amperes or more and over 6 feet wide requires what for working space?", "options":["A single entrance", "An entrance at each end of the working space", "A guardrail", "An emergency exit"], "correct":1, "source":{"name":"NEC 2026 Article 110.26(C)(2)", "url":""}, "explanation":"Per NEC 110.26(C)(2), switchboards, switchgear, panelboards, and motor control centers rated 1200A or more and over 6 feet wide shall have an entrance at each end of the working space."},
      {"id":"je-469", "question":"What is the minimum width of working space in front of electrical equipment?", "options":["24 inches", "30 inches or width of equipment, whichever is greater", "36 inches", "48 inches"], "correct":1, "source":{"name":"NEC 2026 Article 110.26(A)(2)", "url":""}, "explanation":"Per NEC 110.26(A)(2), the width of the working space shall be the width of the equipment or 30 inches (750 mm), whichever is greater."},
      {"id":"je-470", "question":"Dedicated equipment space above panelboards must extend to what height?", "options":["6 feet", "6 feet 7 inches", "The structural ceiling or 6 feet, whichever is lower", "The structural ceiling or 25 feet above the equipment, whichever is lower"], "correct":3, "source":{"name":"NEC 2026 Article 110.26(E)(1)(b)", "url":""}, "explanation":"Per NEC 110.26(E)(1)(b), the dedicated space shall extend from the floor to the structural ceiling or 25 feet (7.6 m) above the equipment, whichever is lower."},
      {"id":"je-471", "question":"What piping or equipment is permitted in the dedicated space above electrical equipment?", "options":["No piping or equipment", "Fire sprinklers", "Plumbing pipes", "HVAC ducts"], "correct":1, "source":{"name":"NEC 2026 Article 110.26(E)(1)(c)", "url":""}, "explanation":"Per NEC 110.26(E)(1)(c), foreign systems (piping, ducts, or other equipment) shall not be installed in the dedicated equipment space, but sprinkler protection is permitted."},
      {"id":"je-472", "question":"Electrical equipment used in wet locations must be designed so that what cannot enter or accumulate?", "options":["Dust", "Moisture or water", "Insects", "Debris"], "correct":1, "source":{"name":"NEC 2026 Article 110.11", "url":""}, "explanation":"Per NEC 110.11, electrical equipment in wet locations shall be designed so moisture or water cannot enter or accumulate within the equipment."},
      {"id":"je-473", "question":"Listed equipment shall be installed and used in accordance with what?", "options":["Local building codes", "Any manufacturer's instructions", "Instructions included in the listing or labeling", "Installer's judgment"], "correct":2, "source":{"name":"NEC 2026 Article 110.3(B)", "url":""}, "explanation":"Per NEC 110.3(B), listed or labeled equipment shall be installed and used in accordance with any instructions included in the listing or labeling."},
      {"id":"je-474", "question":"Arc energy reduction is required for what rating of circuit breakers in service equipment?", "options":["Any rating", "200 amperes or more", "400 amperes or more", "1200 amperes or more"], "correct":3, "source":{"name":"NEC 2026 Article 240.87", "url":""}, "explanation":"Per NEC 240.87, service equipment and panelboards with circuit breakers rated 1200 amperes or more require one of several arc energy reduction methods."},
      {"id":"je-475", "question":"A Series-rated system permits the use of what type of protective devices?", "options":["Only identical devices", "Upstream devices that can protect downstream devices with lower interrupting ratings", "Only fuses", "Only circuit breakers"], "correct":1, "source":{"name":"NEC 2026 Article 240.86", "url":""}, "explanation":"Per NEC 240.86, series-rated systems permit the use of overcurrent devices with interrupting ratings less than the available fault current when protected by an upstream device."},
      {"id":"je-476", "question":"Overcurrent devices must be capable of interrupting fault currents at what level?", "options":["Minimum of 5000 amps", "The available fault current at their line terminals", "10,000 amps minimum", "Based on conductor size"], "correct":1, "source":{"name":"NEC 2026 Article 110.9", "url":""}, "explanation":"Per NEC 110.9, equipment intended to interrupt current at fault levels shall have an interrupting rating not less than the nominal circuit voltage and the current that is available at the line terminals."},
      {"id":"je-477", "question":"Short-circuit current ratings (SCCR) must be field marked on what type of equipment?", "options":["All equipment", "Industrial control panels, motor control centers, panelboards, and industrial machinery", "Service equipment only", "Generator installations only"], "correct":1, "source":{"name":"NEC 2026 Article 110.24", "url":""}, "explanation":"Per NEC 110.24, service equipment, industrial control panels, motor control centers, and certain other equipment shall be marked with the maximum available fault current."},
      {"id":"je-478", "question":"The available fault current must be documented and updated when what occurs?", "options":["Every year", "Every 5 years", "When modifications affecting the available fault current occur", "At every inspection"], "correct":2, "source":{"name":"NEC 2026 Article 110.24(B)", "url":""}, "explanation":"Per NEC 110.24(B), when modifications that could affect the available fault current occur, the available fault current shall be recalculated and the marking updated."},
      {"id":"je-479", "question":"What is required when selecting overcurrent devices to ensure proper coordination?", "options":["Same manufacturer", "Selective coordination to prevent unintended devices from tripping", "Identical trip curves", "Equal interrupting ratings"], "correct":1, "source":{"name":"NEC 2026 Articles 700.32, 701.32, 708.54", "url":""}, "explanation":"Per NEC 700.32, 701.32, and 708.54, overcurrent protective devices shall be selectively coordinated so that a fault condition will not take more devices offline than necessary."},
      {"id":"je-480", "question":"Fuses shall be plainly marked with their what?", "options":["Manufacturer name only", "Ampere rating, voltage rating, and interrupting rating if over 10,000A", "Manufacturing date", "Serial number"], "correct":1, "source":{"name":"NEC 2026 Article 240.60(C)", "url":""}, "explanation":"Per NEC 240.60(C), cartridge fuses shall be plainly marked with the ampere rating, voltage rating, and interrupting rating if other than 10,000 amperes."},
      {"id":"je-481", "question":"The ampere rating of fuses in motor circuits can exceed the conductor ampacity under what conditions?", "options":["Never", "When sized for motor starting per Article 430.52", "When oversized for voltage drop", "When doubled for intermittent loads"], "correct":1, "source":{"name":"NEC 2026 Article 240.4(G)", "url":""}, "explanation":"Per NEC 240.4(G), overcurrent protection for motor circuits is permitted to exceed conductor ampacity as specified in Article 430 to allow for motor starting current."},
      {"id":"je-482", "question":"A supplementary overcurrent protective device is permitted as the sole protection for what?", "options":["Branch circuits", "Feeders", "Appliances, luminaires, and other equipment, not as branch circuit protection", "Motor circuits"], "correct":2, "source":{"name":"NEC 2026 Article 240.10", "url":""}, "explanation":"Per NEC 240.10, supplementary overcurrent devices shall not be used as a substitute for required branch-circuit overcurrent devices or as a substitute for the required protection of branch circuits."},
      {"id":"je-483", "question":"Overcurrent devices shall not be located in what type of spaces?", "options":["Closets", "Bathrooms, clothes closets, or over steps of stairs", "Garages", "Utility rooms"], "correct":1, "source":{"name":"NEC 2026 Article 240.24(D)(E)(F)", "url":""}, "explanation":"Per NEC 240.24, overcurrent devices shall not be located in bathrooms, nor in the vicinity of easily ignitable material (clothes closets), nor over steps of a stairway."},
      {"id":"je-484", "question":"Type S fuses or adapters are required for plug fuse installations to prevent what?", "options":["Overvoltage conditions", "Overfusing (installing fuses with higher ratings than circuit allows)", "Ground faults", "Short circuits"], "correct":1, "source":{"name":"NEC 2026 Article 240.54", "url":""}, "explanation":"Per NEC 240.54, Type S fuses are designed to prevent overfusing by ensuring the fuse size matches the amperage of the circuit."},
      {"id":"je-485", "question":"What does selective coordination mean for overcurrent protective devices?", "options":["All devices trip at the same time", "Only the device immediately upstream of the fault operates", "Only the device nearest the fault operates, leaving upstream devices unaffected", "All devices must be from the same manufacturer"], "correct":2, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, selective coordination means localization of an overcurrent condition to restrict outages to equipment affected, accomplished by the choice of overcurrent devices and their ratings or settings."},
      {"id":"je-486", "question":"Which conductor in a multiwire branch circuit can be used as a neutral?", "options":["Any conductor", "The grounded conductor that carries only unbalanced current", "The equipment grounding conductor", "The largest conductor"], "correct":1, "source":{"name":"NEC 2026 Article 100, 200.4", "url":""}, "explanation":"Per NEC definitions and 200.4, the grounded conductor (neutral) carries only the unbalanced current from the other conductors in a multiwire branch circuit."},
      {"id":"je-487", "question":"A kitchen range cord must have a minimum length of what?", "options":["18 inches", "3 feet", "4 feet", "6 feet"], "correct":1, "source":{"name":"NEC 2026 Article 422.16(B)(2)(3)", "url":""}, "explanation":"Per NEC 422.16(B)(2)(3), power supply cords for ranges and dryers shall be 3 to 4 feet in length."},
      {"id":"je-488", "question":"Electric range receptacles must be rated at what minimum amperage?", "options":["30 amps", "40 amps", "50 amps", "60 amps"], "correct":2, "source":{"name":"NEC 2026 Article 210.19(A)(3)", "url":""}, "explanation":"Per NEC 210.19(A)(3), the branch circuit for a household range rated 8.75 kW or more requires a minimum 40-amp circuit, typically with a 50-amp receptacle for larger ranges."},
      {"id":"je-489", "question":"A dryer receptacle must be what type in new installations?", "options":["3-wire", "4-wire with separate equipment grounding conductor", "Either 3-wire or 4-wire", "2-wire"], "correct":1, "source":{"name":"NEC 2026 Article 250.140", "url":""}, "explanation":"Per NEC 250.140, new installations require a 4-wire connection with a separate equipment grounding conductor for electric dryers."},
      {"id":"je-490", "question":"What type of receptacle configuration is required for a 30-amp, 125/250V dryer circuit?", "options":["NEMA 10-30R", "NEMA 14-30R", "NEMA 6-30R", "NEMA 5-30R"], "correct":1, "source":{"name":"NEC 2026 Article 250.140, NEMA Standards", "url":""}, "explanation":"Per NEC 250.140 and NEMA standards, the NEMA 14-30R is the 4-wire, 30-amp, 125/250V receptacle configuration required for new dryer installations."},
      {"id":"je-491", "question":"A ground-mounted air conditioning unit requires an equipment disconnecting means within what distance?", "options":["25 feet", "50 feet", "Within sight from the unit", "No specific requirement"], "correct":2, "source":{"name":"NEC 2026 Article 440.14", "url":""}, "explanation":"Per NEC 440.14, the disconnecting means for air-conditioning equipment shall be installed within sight from and readily accessible from the equipment."},
      {"id":"je-492", "question":"The disconnecting means for an air conditioner must be capable of being locked in what position?", "options":["Closed only", "Open only", "Either position", "No locking required"], "correct":1, "source":{"name":"NEC 2026 Article 440.14", "url":""}, "explanation":"Per NEC 440.14, the disconnecting means shall be capable of being locked in the open position."},
      {"id":"je-493", "question":"A smoke detector circuit typically requires what type of protection?", "options":["GFCI only", "AFCI only", "Both AFCI and dedicated circuit", "No special protection"], "correct":2, "source":{"name":"NEC 2026 Article 210.12, NFPA 72", "url":""}, "explanation":"Smoke detectors in dwelling units are typically on AFCI-protected circuits per NEC 210.12, but may have exceptions for certain fire alarm equipment."},
      {"id":"je-494", "question":"What size conductor is required for a 30-amp circuit?", "options":["#14 AWG", "#12 AWG", "#10 AWG", "#8 AWG"], "correct":2, "source":{"name":"NEC 2026 Table 310.16, 240.4(D)", "url":""}, "explanation":"Per NEC Table 310.16 and 240.4(D), a 30-amp circuit requires minimum #10 AWG copper conductors."},
      {"id":"je-495", "question":"What size conductor is required for a 40-amp circuit?", "options":["#10 AWG", "#8 AWG", "#6 AWG", "#4 AWG"], "correct":1, "source":{"name":"NEC 2026 Table 310.16", "url":""}, "explanation":"Per NEC Table 310.16, a 40-amp circuit requires minimum #8 AWG copper conductors with 60°C insulation."},
      {"id":"je-496", "question":"What size conductor is required for a 50-amp circuit?", "options":["#8 AWG", "#6 AWG", "#4 AWG", "#3 AWG"], "correct":1, "source":{"name":"NEC 2026 Table 310.16", "url":""}, "explanation":"Per NEC Table 310.16, a 50-amp circuit requires minimum #6 AWG copper conductors with 60°C insulation (or #8 AWG with 75°C insulation)."},
      {"id":"je-497", "question":"What size conductor is typically required for a 100-amp feeder?", "options":["#6 AWG", "#4 AWG", "#3 AWG", "#1 AWG"], "correct":2, "source":{"name":"NEC 2026 Table 310.16", "url":""}, "explanation":"Per NEC Table 310.16, a 100-amp circuit typically requires #3 AWG copper conductors with 60°C insulation or #4 AWG with 75°C insulation."},
      {"id":"je-498", "question":"The minimum size copper equipment grounding conductor for a 20-amp circuit is what?", "options":["#14 AWG", "#12 AWG", "#10 AWG", "#8 AWG"], "correct":1, "source":{"name":"NEC 2026 Table 250.122", "url":""}, "explanation":"Per NEC Table 250.122, a circuit protected by a 20-amp overcurrent device requires a minimum #12 AWG copper equipment grounding conductor."},
      {"id":"je-499", "question":"The minimum size copper equipment grounding conductor for a 30-amp circuit is what?", "options":["#14 AWG", "#12 AWG", "#10 AWG", "#8 AWG"], "correct":2, "source":{"name":"NEC 2026 Table 250.122", "url":""}, "explanation":"Per NEC Table 250.122, a circuit protected by a 30-amp overcurrent device requires a minimum #10 AWG copper equipment grounding conductor."},
      {"id":"je-500", "question":"What is the minimum size copper equipment grounding conductor for a 50-amp circuit?", "options":["#12 AWG", "#10 AWG", "#8 AWG", "#6 AWG"], "correct":1, "source":{"name":"NEC 2026 Table 250.122", "url":""}, "explanation":"Per NEC Table 250.122, a circuit protected by a 50-amp overcurrent device requires a minimum #10 AWG copper equipment grounding conductor."},
      {"id":"je-501", "question":"What is the purpose of the NEC?", "options":["To provide design specifications", "The practical safeguarding of persons and property from hazards arising from the use of electricity", "To ensure minimum installation cost", "To establish electrical efficiency standards"], "correct":1, "source":{"name":"NEC 2026 Article 90.1(A)", "url":""}, "explanation":"Per NEC 90.1(A), the purpose of the NEC is the practical safeguarding of persons and property from hazards arising from the use of electricity."},
      {"id":"je-502", "question":"The NEC is not intended as a design specification or instruction manual for untrained persons. True or False?", "options":["True - it is a minimum safety standard", "False - it is a complete design guide", "True - only for commercial work", "False - it covers all installation details"], "correct":0, "source":{"name":"NEC 2026 Article 90.1(A)(C)", "url":""}, "explanation":"Per NEC 90.1(A) and (C), the NEC contains provisions considered necessary for safety and is not intended as a design specification or instruction manual for untrained persons."},
      {"id":"je-503", "question":"Compliance with the NEC results in what?", "options":["An efficient installation", "A convenient installation", "An essentially safe installation", "The most economical installation"], "correct":2, "source":{"name":"NEC 2026 Article 90.1(B)", "url":""}, "explanation":"Per NEC 90.1(B), compliance with the provisions of the Code will result in an installation that is essentially free from hazard but not necessarily efficient, convenient, or adequate for good service."},
      {"id":"je-504", "question":"Chapters 1 through 4 of the NEC apply to what?", "options":["Only residential installations", "Only commercial installations", "All electrical installations generally", "Only hazardous locations"], "correct":2, "source":{"name":"NEC 2026 Article 90.3", "url":""}, "explanation":"Per NEC 90.3, Chapters 1 through 4 apply generally to all electrical installations."},
      {"id":"je-505", "question":"Chapters 5, 6, and 7 of the NEC supplement or modify the general rules in Chapters 1-4. True or False?", "options":["True", "False", "Only Chapter 5 modifies", "Only Chapter 7 modifies"], "correct":0, "source":{"name":"NEC 2026 Article 90.3", "url":""}, "explanation":"Per NEC 90.3, Chapters 5, 6, and 7 supplement or modify the general rules in Chapters 1 through 4."},
      {"id":"je-506", "question":"Chapter 8 of the NEC covers what?", "options":["Hazardous locations", "Special equipment", "Communications systems", "Emergency systems"], "correct":2, "source":{"name":"NEC 2026 Article 90.3", "url":""}, "explanation":"Per NEC 90.3, Chapter 8 covers communications systems and is not subject to the requirements of Chapters 1 through 7 except where the requirements are specifically referenced."},
      {"id":"je-507", "question":"The authority having jurisdiction (AHJ) can modify NEC requirements based on what?", "options":["Personal preference", "Special permission for specific installations where alternative methods provide equivalent safety", "Contractor request", "Cost savings"], "correct":1, "source":{"name":"NEC 2026 Article 90.4", "url":""}, "explanation":"Per NEC 90.4, the AHJ has the responsibility to interpret and approve equipment, materials, and installations based on equivalent safety."},
      {"id":"je-508", "question":"What does the term 'shall' mean in the NEC?", "options":["Recommended", "Mandatory requirement", "Optional", "Permitted"], "correct":1, "source":{"name":"NEC 2026 Article 90.5(A)", "url":""}, "explanation":"Per NEC 90.5(A), 'shall' indicates a mandatory requirement."},
      {"id":"je-509", "question":"What does the term 'shall not' mean in the NEC?", "options":["Not recommended", "Prohibited", "Optional restriction", "Advisory"], "correct":1, "source":{"name":"NEC 2026 Article 90.5(B)", "url":""}, "explanation":"Per NEC 90.5(B), 'shall not' indicates a prohibition."},
      {"id":"je-510", "question":"What does the term 'shall be permitted' mean in the NEC?", "options":["Mandatory", "The indicated action is allowed but not required", "Prohibited", "Recommended"], "correct":1, "source":{"name":"NEC 2026 Article 90.5(C)", "url":""}, "explanation":"Per NEC 90.5(C), 'shall be permitted' indicates the described action is allowed but not required."},
      {"id":"je-511", "question":"Informational notes in the NEC are what?", "options":["Mandatory requirements", "Explanatory material that is not enforceable", "Optional requirements", "Design specifications"], "correct":1, "source":{"name":"NEC 2026 Article 90.5(D)", "url":""}, "explanation":"Per NEC 90.5(D), informational notes are explanatory material and are not enforceable requirements of the NEC."},
      {"id":"je-512", "question":"The NEC addresses what type of electrical installations?", "options":["Only utility installations", "Premises wiring and certain other equipment outside buildings", "Only industrial facilities", "Only new construction"], "correct":1, "source":{"name":"NEC 2026 Article 90.2(A)", "url":""}, "explanation":"Per NEC 90.2(A), the NEC covers the installation of electrical conductors, equipment, and raceways for premises wiring and certain equipment outside buildings."},
      {"id":"je-513", "question":"The NEC does NOT cover what type of installation?", "options":["Residential wiring", "Installations by electric utility for generation, transmission, and distribution", "Commercial buildings", "Industrial plants"], "correct":1, "source":{"name":"NEC 2026 Article 90.2(B)", "url":""}, "explanation":"Per NEC 90.2(B), the NEC does not cover installations of communications utility equipment, electric utility installations for generation/transmission/distribution, and certain other specific installations."},
      {"id":"je-514", "question":"Reconditioned equipment must meet what requirement?", "options":["Approval by the manufacturer only", "Listed or field evaluated as reconditioned", "Any approval", "No specific requirements"], "correct":1, "source":{"name":"NEC 2026 Article 110.21(A)(2)", "url":""}, "explanation":"Per NEC 110.21(A)(2), reconditioned equipment shall be marked as reconditioned and meet applicable listing or field evaluation requirements."},
      {"id":"je-515", "question":"What information must be marked on reconditioned equipment?", "options":["Original manufacturer only", "Date of reconditioning and name of reconditioning entity", "Serial number only", "No marking required"], "correct":1, "source":{"name":"NEC 2026 Article 110.21(A)(2)", "url":""}, "explanation":"Per NEC 110.21(A)(2), reconditioned equipment shall be marked with the name, trademark, or other descriptive marking by which the entity that performed the reconditioning can be identified, along with the date of reconditioning."},
      {"id":"je-516", "question":"Unused openings in boxes and enclosures must be what?", "options":["Left open for ventilation", "Effectively closed", "Labeled as unused", "Covered with tape"], "correct":1, "source":{"name":"NEC 2026 Article 110.12(A)", "url":""}, "explanation":"Per NEC 110.12(A), unused cable or raceway openings in boxes, raceways, auxiliary gutters, and enclosures shall be effectively closed."},
      {"id":"je-517", "question":"Internal parts of electrical equipment, including busbars and wiring terminals, shall not be damaged or what?", "options":["Modified", "Contaminated by foreign materials such as paint, plaster, cleaners, or other substances", "Accessed", "Tested"], "correct":1, "source":{"name":"NEC 2026 Article 110.12(B)", "url":""}, "explanation":"Per NEC 110.12(B), internal parts of electrical equipment shall not be damaged or contaminated by foreign materials such as paint, plaster, cleaners, abrasives, or corrosive residues."},
      {"id":"je-518", "question":"Electrical equipment shall be installed and used in accordance with what?", "options":["Common practice", "Any available instructions", "Manufacturer's instructions", "Installer's preference"], "correct":2, "source":{"name":"NEC 2026 Article 110.3(B)", "url":""}, "explanation":"Per NEC 110.3(B), listed or labeled equipment shall be installed and used in accordance with any instructions included in the listing or labeling."},
      {"id":"je-519", "question":"Equipment for general use that is used for specific purposes must comply with what in addition to Article 110?", "options":["Only Article 110", "The relevant article covering that specific equipment or occupancy", "Local codes only", "OSHA regulations"], "correct":1, "source":{"name":"NEC 2026 Article 110.1", "url":""}, "explanation":"Per NEC 110.1, equipment covered by Article 110 is required to comply with applicable requirements in other articles that modify or supplement the general requirements."},
      {"id":"je-520", "question":"What is the voltage rating of systems where the maximum voltage between any two conductors does not exceed 1000V AC or 1500V DC?", "options":["Low voltage", "Medium voltage", "1000 volts, nominal, or less", "Extra-low voltage"], "correct":2, "source":{"name":"NEC 2026 Article 110.4", "url":""}, "explanation":"Per NEC 110.4, the voltage rating of conductors and equipment shall be determined based on the nominal voltage of the circuit. Systems at or below 1000V AC/1500V DC nominal are covered by most of the general NEC requirements."},
      {"id":"je-521", "question":"What NEC table is used to determine the maximum number of THHN conductors permitted in EMT?", "options":["Table 310.16", "Table 400.5", "Chapter 9 Table C1", "Table 220.55"], "correct":2, "source":{"name":"NEC 2026 Chapter 9 Table C1", "url":""}, "explanation":"NEC Chapter 9 Table C1 provides the maximum number of conductors and fixture wires in electrical metallic tubing (EMT)."},
      {"id":"je-522", "question":"When sizing a feeder to supply a motor and other loads, the motor load is calculated at what?", "options":["100% of motor FLC", "125% of motor FLC for the largest motor plus sum of all other loads", "150% of all motor loads", "80% of all loads combined"], "correct":1, "source":{"name":"NEC 2026 Article 430.24", "url":""}, "explanation":"Per NEC 430.24, feeders supplying motor loads shall have capacity not less than 125% of the FLC of the highest rated motor plus the sum of all other loads."},
      {"id":"je-523", "question":"A circuit supplying a continuous load must have conductor ampacity at least what percentage of the load?", "options":["80%", "100%", "125%", "150%"], "correct":2, "source":{"name":"NEC 2026 Article 210.20(A)", "url":""}, "explanation":"Per NEC 210.20(A), where a branch circuit supplies continuous loads, the rating of the overcurrent device shall be not less than 125% of the continuous load."},
      {"id":"je-524", "question":"A continuous load is defined as one that operates for how long or longer?", "options":["1 hour", "2 hours", "3 hours", "4 hours"], "correct":2, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, a continuous load is a load where the maximum current is expected to continue for 3 hours or more."},
      {"id":"je-525", "question":"What is the maximum number of conductors permitted in a single raceway?", "options":["3", "6", "Based on conduit fill calculations", "Unlimited"], "correct":2, "source":{"name":"NEC 2026 Chapter 9 Table 1", "url":""}, "explanation":"Per NEC Chapter 9 Table 1, the maximum number of conductors is determined by the cross-sectional area fill limits (40% for 3 or more conductors)."},
      {"id":"je-526", "question":"A dwelling unit with 100-amp service is required to have what minimum size copper service entrance conductors?", "options":["#6 AWG", "#4 AWG", "#3 AWG", "#2 AWG"], "correct":2, "source":{"name":"NEC 2026 Table 310.16", "url":""}, "explanation":"Per NEC Table 310.16, for a 100-amp service, #3 AWG copper (60°C) or #4 AWG copper (75°C) conductors are typically used."},
      {"id":"je-527", "question":"What is the maximum overcurrent protection for #12 AWG copper conductors?", "options":["15 amps", "20 amps", "25 amps", "30 amps"], "correct":1, "source":{"name":"NEC 2026 Table 240.4(D)", "url":""}, "explanation":"Per NEC 240.4(D), #12 AWG copper conductors shall be protected at not more than 20 amperes."},
      {"id":"je-528", "question":"What is the maximum overcurrent protection for #10 AWG copper conductors?", "options":["20 amps", "25 amps", "30 amps", "40 amps"], "correct":2, "source":{"name":"NEC 2026 Table 240.4(D)", "url":""}, "explanation":"Per NEC 240.4(D), #10 AWG copper conductors shall be protected at not more than 30 amperes."},
      {"id":"je-529", "question":"When an OCPD is not available in the standard size per 240.6(A), the next higher standard size is permitted up to what ampacity?", "options":["400 amps", "600 amps", "800 amps", "No limit"], "correct":2, "source":{"name":"NEC 2026 Article 240.4(B)", "url":""}, "explanation":"Per NEC 240.4(B), the next higher standard overcurrent device rating is permitted only where the ampacity of the conductors does not correspond to a standard ampere rating and where the rating is 800 amperes or less."},
      {"id":"je-530", "question":"Electrical work must be performed by what type of person according to the intent of the NEC?", "options":["Any homeowner", "Qualified persons only", "Any adult", "Licensed electricians only"], "correct":1, "source":{"name":"NEC 2026 Article 110.6, 100", "url":""}, "explanation":"Per NEC Article 100 and general code intent, a qualified person is one who has skills and knowledge related to the construction and operation of electrical equipment and has received safety training to recognize and avoid hazards."},
      {"id":"je-531", "question":"What is the term for a person who has skills and knowledge related to electrical equipment construction and has received safety training?", "options":["Licensed electrician", "Master electrician", "Qualified person", "Competent person"], "correct":2, "source":{"name":"NEC 2026 Article 100", "url":""}, "explanation":"Per NEC Article 100, a qualified person is one who has skills and knowledge related to the construction and operation of the electrical equipment and installations and has received safety training to recognize and avoid the hazards involved."},
      {"id":"je-532", "question":"The total VA calculation for receptacle loads in commercial buildings uses what method per 220.14(I)?", "options":["Actual connected load", "180 VA per receptacle outlet", "500 VA per circuit", "1500 VA per circuit"], "correct":1, "source":{"name":"NEC 2026 Article 220.14(I)", "url":""}, "explanation":"Per NEC 220.14(I), each receptacle outlet in other than dwelling units shall be calculated at not less than 180 VA."},
      {"id":"je-533", "question":"In commercial occupancies, what load is assigned to each general-use receptacle outlet?", "options":["150 VA", "180 VA", "200 VA", "300 VA"], "correct":1, "source":{"name":"NEC 2026 Article 220.14(I)", "url":""}, "explanation":"Per NEC 220.14(I), for receptacle outlets in non-dwelling occupancies, each single or multiple receptacle on one yoke shall be calculated at not less than 180 VA."},
      {"id":"je-534", "question":"Lighting outlets, other than dwelling units, are calculated at what load per outlet?", "options":["100 VA", "180 VA", "The actual lamp rating", "300 VA"], "correct":2, "source":{"name":"NEC 2026 Article 220.14(D)", "url":""}, "explanation":"Per NEC 220.14(D), for other than dwelling units, an outlet supplying luminaire(s) shall be calculated based on the VA rating of the luminaire, or the maximum VA the luminaire is listed to provide."},
      {"id":"je-535", "question":"For track lighting in dwelling units, the load is calculated at how many VA per linear foot of track?", "options":["100 VA", "150 VA", "180 VA", "200 VA"], "correct":2, "source":{"name":"NEC 2026 Article 220.14(F)", "url":""}, "explanation":"Per NEC 220.14(F)(3), for track lighting in dwelling units or guest rooms, the load shall be calculated at 180 VA for every 600 mm (2 ft) of track lighting or fraction thereof."},
      {"id":"je-536", "question":"Recessed luminaires installed in insulated ceilings must be listed as what?", "options":["UL Listed", "IC rated (Insulation Contact)", "NEMA rated", "Plenum rated"], "correct":1, "source":{"name":"NEC 2026 Article 410.116(B)", "url":""}, "explanation":"Per NEC 410.116(B), a recessed luminaire installed where it is likely to be in contact with combustible material shall be listed as Type IC (Insulation Contact)."},
      {"id":"je-537", "question":"What clearance is required between a non-IC rated recessed luminaire and thermal insulation?", "options":["1 inch", "3 inches from sides, above open to air", "6 inches", "12 inches"], "correct":1, "source":{"name":"NEC 2026 Article 410.116(A)(1)", "url":""}, "explanation":"Per NEC 410.116(A)(1), non-IC rated recessed luminaires shall have 3-inch clearance from the sides and shall be open to the air at the top (above ceiling)."},
      {"id":"je-538", "question":"A ceiling-suspended paddle fan must be supported by what?", "options":["Any standard outlet box", "An outlet box listed for the purpose or other approved means", "A device box", "A junction box"], "correct":1, "source":{"name":"NEC 2026 Article 422.18", "url":""}, "explanation":"Per NEC 422.18, ceiling-suspended (paddle) fans shall be supported by outlet boxes or outlet box systems identified for such use."},
      {"id":"je-539", "question":"What is the maximum weight that a standard outlet box can support for a luminaire without additional support?", "options":["25 pounds", "35 pounds", "50 pounds", "70 pounds"], "correct":2, "source":{"name":"NEC 2026 Article 314.27(A)", "url":""}, "explanation":"Per NEC 314.27(A), outlet boxes that support luminaires shall support luminaires weighing not more than 50 pounds."},
      {"id":"je-540", "question":"A luminaire weighing more than 50 pounds must be supported independently of what?", "options":["The ceiling", "The outlet box", "The electrical supply", "The building structure"], "correct":1, "source":{"name":"NEC 2026 Article 314.27(A)(2)", "url":""}, "explanation":"Per NEC 314.27(A)(2), luminaires exceeding 50 pounds shall be supported independently of the outlet box unless the outlet box is listed and identified for the weight to be supported."},
      {"id":"je-541", "question":"The maximum standard rating of a branch circuit fuse is what amperage?", "options":["400 amps", "600 amps", "800 amps", "6000 amps"], "correct":1, "source":{"name":"NEC 2026 Article 240.6(A)", "url":""}, "explanation":"Per NEC 240.6(A), standard fuse ampere ratings include values up to 6000 amperes, but common branch circuit sizes go up to 600 amperes for fuses."},
      {"id":"je-542", "question":"What standard ampere ratings are available for fuses and inverse time circuit breakers per 240.6(A)?", "options":["Any amperage", "15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150... (and higher)", "Only multiples of 10", "Only multiples of 15"], "correct":1, "source":{"name":"NEC 2026 Article 240.6(A)", "url":""}, "explanation":"Per NEC 240.6(A), the standard ampere ratings for fuses and inverse time circuit breakers are: 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, and higher values as listed."},
      {"id":"je-543", "question":"Each disconnect must clearly indicate what?", "options":["The installer's name", "Whether it is in the open (off) or closed (on) position", "The installation date", "The circuit number"], "correct":1, "source":{"name":"NEC 2026 Article 404.7", "url":""}, "explanation":"Per NEC 404.7, switches and circuit breakers shall clearly indicate whether they are in the open (off) or closed (on) position."},
      {"id":"je-544", "question":"Switches controlling lighting loads must be located where?", "options":["Inside closets only", "So that they can be operated without entering the space served", "At the light fixture", "At eye level"], "correct":1, "source":{"name":"NEC 2026 Article 404.8(C)", "url":""}, "explanation":"Per NEC 404.8(C), switches shall not be installed within wet or damp locations in bathrooms unless part of a listed bathroom accessory or integral to listed equipment."},
      {"id":"je-545", "question":"A switch controlling a bathroom exhaust fan must be installed where?", "options":["Inside the shower", "Outside the wet location or be part of a listed assembly", "At the ceiling", "At the floor"], "correct":1, "source":{"name":"NEC 2026 Article 404.4(C)", "url":""}, "explanation":"Per NEC 404.4(C), switches installed in wet or damp locations shall be enclosed in weatherproof enclosures or be part of a listed assembly."},
      {"id":"je-546", "question":"What is required for switches installed in a grounded metal box to ensure grounding?", "options":["Nothing additional", "A grounding connection to the box", "Insulated bushings", "Double insulation"], "correct":1, "source":{"name":"NEC 2026 Article 404.9(B)", "url":""}, "explanation":"Per NEC 404.9(B), snap switches shall be connected to an equipment grounding conductor through the switch yoke, a grounding conductor, or a device with a self-grounding yoke."},
      {"id":"je-547", "question":"When a neutral conductor is required at a switch location for future use, what size must it be?", "options":["Same as the ungrounded conductors", "Not smaller than #14 AWG", "Not smaller than the switch rating", "Any size"], "correct":0, "source":{"name":"NEC 2026 Article 404.2(C)", "url":""}, "explanation":"Per NEC 404.2(C), the neutral conductor shall be the same size as the ungrounded conductors in the switch box to support future electronic switches that require a neutral."},
      {"id":"je-548", "question":"A grounded conductor is required at switch locations for lighting loads. What exceptions apply?", "options":["No exceptions", "Switches not integral to luminaire, occupancy sensors, switches near service equipment within sight of the neutral", "Only outdoor switches", "Only 3-way switches"], "correct":1, "source":{"name":"NEC 2026 Article 404.2(C) Exceptions", "url":""}, "explanation":"Per NEC 404.2(C) exceptions, a neutral conductor is not required in certain situations including switches integral to luminaires, occupancy sensors not requiring a neutral, and switch locations with access to a grounded conductor."},
      {"id":"je-549", "question":"What is the proper installation method for a knife switch with an exposed blade?", "options":["Blade up when in open position", "Blade down when in open position", "Horizontal mounting only", "Any position"], "correct":1, "source":{"name":"NEC 2026 Article 404.10(A)", "url":""}, "explanation":"Per NEC 404.10(A), single-throw knife switches with exposed blades shall be installed so that gravity will not tend to close them (blade should be down in open position)."},
      {"id":"je-550", "question":"All 125-volt, 15- and 20-ampere receptacles installed in dwelling unit bedrooms must have what protection?", "options":["GFCI only", "AFCI only", "Both AFCI and GFCI", "Surge protection"], "correct":1, "source":{"name":"NEC 2026 Article 210.12(A)", "url":""}, "explanation":"Per NEC 210.12(A), all 125-volt, 15- and 20-ampere branch circuits supplying outlets and devices in bedrooms of dwelling units shall be protected by a listed arc-fault circuit interrupter."}
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
    ,
      "accessible equipment": {"term":"Accessible (as applied to equipment)", "definition":"Capable of being reached for operation, renewal, and inspection.", "reference":"NEC Article 100", "url":""},
      "accessible wiring methods": {"term":"Accessible (as applied to wiring methods)", "definition":"Capable of being removed or exposed without damaging the building structure or finish or not permanently closed in by the structure.", "reference":"NEC Article 100", "url":""},
      "readily accessible": {"term":"Readily Accessible", "definition":"Capable of being reached quickly for operation, renewal, or inspections without requiring those to whom ready access is requisite to use tools (other than keys), to climb over or under obstacles, or to resort to portable ladders.", "reference":"NEC Article 100", "url":""},
      "authority having jurisdiction": {"term":"Authority Having Jurisdiction (AHJ)", "definition":"An organization, office, or individual responsible for enforcing the requirements of a code or standard, or for approving equipment, materials, an installation, or a procedure.", "reference":"NEC Article 100", "url":""},
      "approved": {"term":"Approved", "definition":"Acceptable to the authority having jurisdiction.", "reference":"NEC Article 100", "url":""},
      "askarel": {"term":"Askarel", "definition":"A generic term for a group of nonflammable synthetic chlorinated hydrocarbons used as electrical insulating media.", "reference":"NEC Article 100", "url":""},
      "attachment plug": {"term":"Attachment Plug (Plug)", "definition":"A device that, by insertion in a receptacle, establishes a connection between the conductors of the attached flexible cord and the conductors connected permanently to the receptacle.", "reference":"NEC Article 100", "url":""},
      "automatic": {"term":"Automatic", "definition":"Performing a function without the necessity of human intervention.", "reference":"NEC Article 100", "url":""},
      "bipolar circuit": {"term":"Bipolar Circuit", "definition":"A dc circuit comprised of two monopole circuits, each having an opposite polarity connected to a common reference point.", "reference":"NEC Article 100", "url":""},
      "bonding conductor": {"term":"Bonding Conductor (Bonding Jumper)", "definition":"A conductor that ensures the required electrical conductivity between metal parts that are required to be electrically connected.", "reference":"NEC Article 100", "url":""},
      "grounding electrode bonding conductor": {"term":"Grounding Electrode Bonding Conductor", "definition":"A conductor, other than the grounding electrode conductor, used to interconnect two or more grounding electrodes to form the grounding electrode system.", "reference":"NEC Article 100", "url":""},
      "equipment bonding jumper": {"term":"Equipment Bonding Jumper", "definition":"A component of the effective ground-fault current path that is the connection between two or more portions of the equipment grounding conductor.", "reference":"NEC Article 100", "url":""},
      "main bonding jumper": {"term":"Main Bonding Jumper", "definition":"A component of the effective ground-fault current path that is the connection between the grounded circuit conductor and the equipment grounding conductor at the service equipment.", "reference":"NEC Article 100", "url":""},
      "supply-side bonding jumper": {"term":"Supply-Side Bonding Jumper", "definition":"A component of the effective ground-fault current path installed on the supply side of a service or within a service equipment enclosure(s) that ensures the required electrical conductivity between metal parts.", "reference":"NEC Article 100", "url":""},
      "circuit breaker": {"term":"Circuit Breaker", "definition":"A device designed to open and close a circuit by nonautomatic means and to open the circuit automatically on a predetermined overcurrent without damage to itself.", "reference":"NEC Article 100", "url":""},
      "concentric knockout": {"term":"Concentric Knockout", "definition":"A series of partially cut circular portions of a box wall arranged with a common center point, allowing different size knockouts to be removed.", "reference":"NEC Installation Practice", "url":""},
      "controller": {"term":"Controller", "definition":"A device or group of devices that serves to govern the electric power delivered to equipment.", "reference":"NEC Article 100", "url":""},
      "current-carrying conductor": {"term":"Current-Carrying Conductor", "definition":"A conductor intended to carry current under normal operation, including phase conductors and the neutral under certain conditions.", "reference":"NEC Article 100", "url":""},
      "effective ground-fault current path": {"term":"Effective Ground-Fault Current Path", "definition":"An intentionally constructed, low-impedance electrically conductive path designed to carry fault current from the point of a ground fault to the electrical supply source to facilitate operation of the OCPD.", "reference":"NEC Article 100, 250.4", "url":""},
      "emergency system": {"term":"Emergency System", "definition":"Those systems legally required and classed as emergency by municipal, state, federal, or other codes, intended to automatically supply illumination, power, or both to designated areas and equipment when the normal supply is interrupted.", "reference":"NEC Article 700", "url":""},
      "energized": {"term":"Energized", "definition":"Electrically connected to, or is, a source of voltage.", "reference":"NEC Article 100", "url":""},
      "exposed wiring": {"term":"Exposed (as applied to wiring methods)", "definition":"On or attached to the surface or behind panels designed to allow access.", "reference":"NEC Article 100", "url":""},
      "ground detector": {"term":"Ground Detector", "definition":"A device or system that provides a visual indication, audible signal, or both to alert of a ground-fault condition in an electrical system.", "reference":"NEC Article 250.21", "url":""},
      "ground fault": {"term":"Ground Fault", "definition":"An unintentional, electrically conducting connection between an ungrounded conductor of an electrical circuit and the normally non-current-carrying conductors, metallic enclosures, metallic raceways, metallic equipment, or earth.", "reference":"NEC Article 100", "url":""},
      "grounded": {"term":"Grounded (Grounding)", "definition":"Connected (connecting) to ground or to a conductive body that extends the ground connection.", "reference":"NEC Article 100", "url":""},
      "health care facility": {"term":"Health Care Facility", "definition":"Buildings or portions of buildings in which medical, dental, psychiatric, nursing, obstetrical, or surgical care are provided.", "reference":"NEC Article 517", "url":""},
      "high leg": {"term":"High Leg (Delta)", "definition":"The phase conductor in a 4-wire, 3-phase, delta system with a higher voltage to ground due to the grounded midpoint of one winding. Must be identified orange and located on B phase.", "reference":"NEC Article 110.15, 408.10(E)", "url":""},
      "impedance grounded system": {"term":"Impedance Grounded System", "definition":"A system in which the grounding connection has a resistance or reactance deliberately inserted to limit fault current.", "reference":"NEC Article 250.36", "url":""},
      "in sight from": {"term":"In Sight From (Within Sight From, Within Sight)", "definition":"Visible and not more than 50 feet (15m) distant from the equipment.", "reference":"NEC Article 100", "url":""},
      "labeled": {"term":"Labeled", "definition":"Equipment or materials to which has been attached a label, symbol, or other identifying mark of an organization acceptable to the AHJ.", "reference":"NEC Article 100", "url":""},
      "listed": {"term":"Listed", "definition":"Equipment, materials, or services included in a list published by an organization acceptable to the AHJ that maintains periodic inspection of production and states that the equipment meets appropriate designated standards.", "reference":"NEC Article 100", "url":""},
      "lockout/tagout": {"term":"Lockout/Tagout", "definition":"Safety procedure used to ensure that dangerous machines are properly shut off and not started up again prior to the completion of maintenance or servicing work.", "reference":"OSHA 29 CFR 1910.147", "url":""},
      "motor control center": {"term":"Motor Control Center (MCC)", "definition":"An assembly of one or more enclosed sections having a common power bus and principally containing motor control units.", "reference":"NEC Article 100", "url":""},
      "multiwire branch circuit": {"term":"Multiwire Branch Circuit", "definition":"A branch circuit that consists of two or more ungrounded conductors that have a voltage between them and a grounded conductor that has equal voltage between it and each ungrounded conductor.", "reference":"NEC Article 100", "url":""},
      "neutral conductor": {"term":"Neutral Conductor", "definition":"The conductor connected to the neutral point of a system that is intended to carry current under normal conditions.", "reference":"NEC Article 100", "url":""},
      "noncurrent-carrying": {"term":"Non-Current-Carrying Conductive Materials", "definition":"Metal parts such as enclosures, raceways, and frames that do not carry current under normal operation but may become energized under fault conditions.", "reference":"NEC Article 250.4", "url":""},
      "objectionable current": {"term":"Objectionable Current", "definition":"Unwanted current flowing on grounding conductors or bonding paths, typically caused by multiple grounding connections. Does not include currents from normal operation or ground faults.", "reference":"NEC Article 250.6", "url":""},
      "outlet": {"term":"Outlet", "definition":"A point on the wiring system at which current is taken to supply utilization equipment.", "reference":"NEC Article 100", "url":""},
      "overcurrent": {"term":"Overcurrent", "definition":"Any current in excess of the rated current of equipment or the ampacity of a conductor, caused by overload, short circuit, or ground fault.", "reference":"NEC Article 100", "url":""},
      "patient care space": {"term":"Patient Care Space", "definition":"Any space of a health care facility wherein patients are intended to be examined or treated.", "reference":"NEC Article 517", "url":""},
      "patient care vicinity": {"term":"Patient Care Vicinity", "definition":"The space with surfaces likely to be contacted by the patient or an attendant touching the patient. Typically defined as 6 feet horizontally and 7.5 feet above the floor from the bed.", "reference":"NEC Article 517", "url":""},
      "permanently installed pool": {"term":"Permanently Installed Pool", "definition":"A pool that is constructed in the ground or partially in the ground, and all pools installed inside a building regardless of construction method.", "reference":"NEC Article 680", "url":""},
      "qualified person": {"term":"Qualified Person", "definition":"One who has skills and knowledge related to the construction and operation of the electrical equipment and installations and has received safety training to recognize and avoid the hazards involved.", "reference":"NEC Article 100", "url":""},
      "separately derived system": {"term":"Separately Derived System", "definition":"An electrical source, other than a service, having no direct connection(s) to circuit conductors of any other electrical source other than those established by grounding and bonding connections.", "reference":"NEC Article 100", "url":""},
      "short circuit": {"term":"Short Circuit", "definition":"An abnormal connection of relatively low impedance, whether made accidentally or intentionally, between two points of different potential.", "reference":"NEC Article 100", "url":""},
      "spgfci": {"term":"SPGFCI (Special Purpose Ground-Fault Circuit Interrupter)", "definition":"A ground-fault protection device for voltages above 150 volts to ground, typically with trip currents up to 20mA, used for pool and similar equipment.", "reference":"NEC Article 680.5(C)", "url":""},
      "storable pool": {"term":"Storable Pool", "definition":"A pool that is constructed on or above the surface of the ground and is capable of holding water to a maximum depth of 1 meter (42 inches) or a pool with nonmetallic, molded polymeric walls regardless of dimension.", "reference":"NEC Article 680.2", "url":""},
      "transfer switch": {"term":"Transfer Switch", "definition":"An automatic or nonautomatic device for transferring one or more load conductor connections from one power source to another.", "reference":"NEC Article 700", "url":""},
      "ungrounded conductor": {"term":"Ungrounded Conductor", "definition":"A conductor that is not grounded or bonded to ground. In a typical branch circuit, the phase or 'hot' conductors are ungrounded.", "reference":"NEC Article 100", "url":""},
      "utilization equipment": {"term":"Utilization Equipment", "definition":"Equipment that utilizes electric energy for electronic, electromechanical, chemical, heating, lighting, or similar purposes.", "reference":"NEC Article 100", "url":""},
      "voltage nominal": {"term":"Voltage, Nominal", "definition":"A nominal value assigned to a circuit or system for the purpose of conveniently designating its voltage class (e.g., 120/240 volts, 480Y/277 volts).", "reference":"NEC Article 100", "url":""},
      "wet location": {"term":"Wet Location", "definition":"Installations underground or in concrete slabs or masonry in direct contact with the earth; in locations subject to saturation with water or other liquids; in unprotected locations exposed to weather.", "reference":"NEC Article 100", "url":""}
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
