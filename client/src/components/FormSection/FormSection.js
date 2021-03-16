import React from "react";
import "./FormSection.css";
import TrueFalse from "../Questions/TrueFalse/TrueFalse";
import MultipleChoice from "../Questions/MultipleChoice/MultipleChoice";
import Text from "../Questions/Text/Text";
import Int from "../Questions/Int/Int";
import CreatePatient from "../CreatePatient/CreatePatient";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import { Button, Modal, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

class FormSection extends React.Component {
  state = {
    form: null,
    adrenalGlandForm: {
      sections: [
        {
          questions: [
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f44908331",
              id: 2118.1000043,
              orderNumber: 21,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908333",
                    id: 2119.1000043,
                    orderNumber: 25,
                    questionBody: {
                      _id: "604686d5bea2585f44908334",
                      questionType: "NoResponse",
                      questionTitle: "Adrenal gland",
                      questionText: "{no text}",
                    },
                  },
                ],
                _id: "604686d5bea2585f44908332",
                questionType: "MultipleChoice",
                questionText: "Tumor Site",
              },
            },
          ],
          sections: [],
          _id: "604686d5bea2585f44908330",
          id: 4257.1000043,
        },
        {
          questions: [
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f44908339",
              id: 4156.1000043,
              orderNumber: 29,
              questionBody: {
                _id: "604686d5bea2585f4490833a",
                questionType: "String",
                questionTitle: "Clinical History (specify)",
                questionText: "Clinical History",
              },
            },
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f4490833c",
              id: 53772.1000043,
              orderNumber: 34,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490833e",
                    id: 20900.1000043,
                    orderNumber: 38,
                    questionBody: {
                      _id: "604686d5bea2585f4490833f",
                      questionType: "NoResponse",
                      questionTitle:
                        "Urinary 17-ketosteroids increased (10 mg / g creatinine / 24 hours)",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908341",
                    id: 20902.1000043,
                    orderNumber: 39,
                    questionBody: {
                      _id: "604686d5bea2585f44908342",
                      questionType: "NoResponse",
                      questionTitle: "Cushing syndrome",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908344",
                    id: 20904.1000043,
                    orderNumber: 40,
                    questionBody: {
                      _id: "604686d5bea2585f44908345",
                      questionType: "NoResponse",
                      questionTitle: "Conn syndrome",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908347",
                    id: 43052.1000043,
                    orderNumber: 41,
                    questionBody: {
                      _id: "604686d5bea2585f44908348",
                      questionType: "NoResponse",
                      questionTitle: "Virilization",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490834a",
                    id: 44618.1000043,
                    orderNumber: 42,
                    questionBody: {
                      _id: "604686d5bea2585f4490834b",
                      questionType: "NoResponse",
                      questionTitle: "Feminization",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490834d",
                    id: 20906.1000043,
                    orderNumber: 43,
                    questionBody: {
                      _id: "604686d5bea2585f4490834e",
                      questionType: "NoResponse",
                      questionTitle: "Weight loss",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908350",
                    id: 20907.1000043,
                    orderNumber: 44,
                    questionBody: {
                      _id: "604686d5bea2585f44908351",
                      questionType: "String",
                      questionTitle: "Other (specify)",
                      questionText: "{no text}",
                    },
                  },
                ],
                _id: "604686d5bea2585f4490833d",
                questionType: "MultipleChoice",
                questionTitle: "Functional Status (Notes J and K)",
                questionText: "Functional Status",
              },
            },
          ],
          sections: [],
          _id: "604686d5bea2585f44908338",
          id: 17537.1000043,
          title: "CLINICAL",
        },
        {
          questions: [
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f44908356",
              id: 42554.1000043,
              orderNumber: 51,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908358",
                    id: 50809.1000043,
                    orderNumber: 54,
                    questionBody: {
                      _id: "604686d5bea2585f44908359",
                      questionType: "NoResponse",
                      questionTitle: "Percutaneous needle biopsy",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490835b",
                    id: 46633.1000043,
                    orderNumber: 55,
                    questionBody: {
                      _id: "604686d5bea2585f4490835c",
                      questionType: "String",
                      questionTitle:
                        "Endoscopic directed biopsy (specify radiographic technique)",
                      questionText: "Endoscopic directed biopsy",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490835e",
                    id: 2122.1000043,
                    orderNumber: 60,
                    questionBody: {
                      _id: "604686d5bea2585f4490835f",
                      questionType: "NoResponse",
                      questionTitle: "Adrenalectomy, total",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908361",
                    id: 2121.1000043,
                    orderNumber: 61,
                    questionBody: {
                      _id: "604686d5bea2585f44908362",
                      questionType: "NoResponse",
                      questionTitle: "Adrenalectomy, partial",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908364",
                    id: 2123.1000043,
                    orderNumber: 62,
                    questionBody: {
                      _id: "604686d5bea2585f44908365",
                      questionType: "String",
                      questionTitle: "Other (specify)",
                      questionText: "{no text}",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908367",
                    id: 2124.1000043,
                    orderNumber: 67,
                    questionBody: {
                      _id: "604686d5bea2585f44908368",
                      questionType: "NoResponse",
                      questionTitle: "Not specified",
                    },
                  },
                ],
                _id: "604686d5bea2585f44908357",
                questionType: "MultipleChoice",
                questionTitle: "Procedure",
              },
            },
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f4490836b",
              id: 52756.1000043,
              orderNumber: 68,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490836d",
                    id: 2126.1000043,
                    orderNumber: 71,
                    questionBody: {
                      _id: "604686d5bea2585f4490836e",
                      questionType: "NoResponse",
                      questionTitle: "Right",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908370",
                    id: 2127.1000043,
                    orderNumber: 72,
                    questionBody: {
                      _id: "604686d5bea2585f44908371",
                      questionType: "NoResponse",
                      questionTitle: "Left",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908373",
                    id: 56812.1000043,
                    orderNumber: 73,
                    questionBody: {
                      _id: "604686d5bea2585f44908374",
                      questionType: "NoResponse",
                      questionTitle: "Bilateral",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908376",
                    id: 2128.1000043,
                    orderNumber: 74,
                    questionBody: {
                      _id: "604686d5bea2585f44908377",
                      questionType: "NoResponse",
                      questionTitle: "Not specified",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908379",
                    id: 20866.1000043,
                    orderNumber: 75,
                    questionBody: {
                      _id: "604686d5bea2585f4490837a",
                      questionType: "String",
                      questionTitle: "Other (specify)",
                      questionText: "{no text}",
                    },
                  },
                ],
                _id: "604686d5bea2585f4490836c",
                questionType: "MultipleChoice",
                questionTitle: "Specimen Laterality",
              },
            },
          ],
          sections: [],
          _id: "604686d5bea2585f44908355",
          id: 17875.1000043,
          title: "SPECIMEN",
        },
        {
          questions: [
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f4490837f",
              id: 59852.1000043,
              orderNumber: 82,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908381",
                    id: 2117.1000043,
                    orderNumber: 86,
                    questionBody: {
                      _id: "604686d5bea2585f44908382",
                      questionType: "NoResponse",
                      questionTitle: "Adrenal cortical carcinoma",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908384",
                    id: 46925.1000043,
                    orderNumber: 87,
                    questionBody: {
                      _id: "604686d5bea2585f44908385",
                      questionType: "NoResponse",
                      questionTitle:
                        "Adrenal cortical carcinoma, oncocytic type",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908387",
                    id: 44449.1000043,
                    orderNumber: 88,
                    questionBody: {
                      _id: "604686d5bea2585f44908388",
                      questionType: "NoResponse",
                      questionTitle: "Adrenal cortical carcinoma, myxoid type",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490838a",
                    id: 59162.1000043,
                    orderNumber: 89,
                    questionBody: {
                      _id: "604686d5bea2585f4490838b",
                      questionType: "NoResponse",
                      questionTitle:
                        "Adrenal cortical carcinoma, sarcomatoid type",
                    },
                  },
                ],
                _id: "604686d5bea2585f44908380",
                questionType: "MultipleChoice",
                questionTitle: "Histologic Type (Notes C through E)",
                questionText: "Histologic Type",
              },
            },
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f44908391",
              id: 49275.1000043,
              orderNumber: 95,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908393",
                    id: 53603.1000043,
                    orderNumber: 99,
                    questionBody: {
                      _id: "604686d5bea2585f44908394",
                      questionType: "NoResponse",
                      questionTitle:
                        "Low grade (<= 20 mitoses / 50 high-power fields)",
                      questionText: "Low grade",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908396",
                    id: 48634.1000043,
                    orderNumber: 101,
                    questionBody: {
                      _id: "604686d5bea2585f44908397",
                      questionType: "NoResponse",
                      questionTitle:
                        "High grade (> 20 mitoses / 50 high-power fields)",
                      questionText: "High grade",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908399",
                    id: 54648.1000043,
                    orderNumber: 105,
                    questionBody: {
                      _id: "604686d5bea2585f4490839a",
                      questionType: "String",
                      questionTitle: "Cannot be assessed (explain)#",
                      questionText: "Cannot be assessed",
                    },
                  },
                ],
                _id: "604686d5bea2585f44908392",
                questionType: "MultipleChoice",
                questionTitle: "Histologic Grade (Notes C through E)",
                questionText: "Histologic Grade",
              },
            },
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f4490839d",
              id: 2129.1000043,
              orderNumber: 110,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490839f",
                    id: 2131.1000043,
                    orderNumber: 114,
                    questionBody: {
                      _id: "604686d5bea2585f449083a0",
                      questionType: "Int",
                      questionTitle: "Greatest dimension in Centimeters (cm)",
                      questionText: "Greatest Dimension (Centimeters)",
                      unitSystem: "UCOM",
                      units: "cm",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083a8",
                    id: 2130.1000043,
                    orderNumber: 136,
                    questionBody: {
                      _id: "604686d5bea2585f449083a9",
                      questionType: "String",
                      questionTitle: "Cannot be determined (explain)",
                      questionText: "Cannot be determined",
                    },
                  },
                ],
                _id: "604686d5bea2585f4490839e",
                questionType: "MultipleChoice",
                questionTitle: "Tumor Size (Note A)",
                questionText: "Tumor Size",
              },
            },
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f449083ac",
              id: 40496.1000043,
              orderNumber: 141,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083ae",
                    id: 44761.1000043,
                    orderNumber: 145,
                    questionBody: {
                      _id: "604686d5bea2585f449083af",
                      questionType: "Int",
                      questionTitle: "Specify weight (g)",
                      questionText: "{no text}",
                      unitSystem: "UCOM",
                      units: "grams",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083b1",
                    id: 57476.1000043,
                    orderNumber: 152,
                    questionBody: {
                      _id: "604686d5bea2585f449083b2",
                      questionType: "String",
                      questionTitle: "Cannot be determined",
                    },
                  },
                ],
                _id: "604686d5bea2585f449083ad",
                questionType: "MultipleChoice",
                questionTitle: "Tumor Weight (Note B)",
                questionText: "Tumor Weight",
              },
            },
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f449083b5",
              id: 51265.1000043,
              orderNumber: 156,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083b7",
                    id: 44186.1000043,
                    orderNumber: 159,
                    selectionDeselectsSiblings: true,
                    questionBody: {
                      _id: "604686d5bea2585f449083b8",
                      questionType: "NoResponse",
                      questionTitle: "No evidence of primary tumor",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083ba",
                    id: 50695.1000043,
                    orderNumber: 160,
                    selectionDeselectsSiblings: true,
                    questionBody: {
                      _id: "604686d5bea2585f449083bb",
                      questionType: "NoResponse",
                      questionTitle:
                        "Tumor confined to adrenal cortex without invasion through tumor capsule (if present)",
                      questionText:
                        "Tumor confined to adrenal cortex without invasion through tumor capsule",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083bd",
                    id: 39537.1000043,
                    orderNumber: 162,
                    questionBody: {
                      _id: "604686d5bea2585f449083be",
                      questionType: "NoResponse",
                      questionTitle:
                        "Tumor invades into or through the adrenal capsule",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083c0",
                    id: 52315.1000043,
                    orderNumber: 163,
                    questionBody: {
                      _id: "604686d5bea2585f449083c1",
                      questionType: "String",
                      questionTitle:
                        "Tumor invades into extra-adrenal structures (specify)",
                      questionText:
                        "Tumor invades into extra-adrenal structures",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083c3",
                    id: 56271.1000043,
                    orderNumber: 168,
                    questionBody: {
                      _id: "604686d5bea2585f449083c4",
                      questionType: "NoResponse",
                      questionTitle:
                        "Tumor invades into other adjacent organ(s)",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083de",
                    id: 51911.1000043,
                    orderNumber: 185,
                    selectionDeselectsSiblings: true,
                    questionBody: {
                      _id: "604686d5bea2585f449083df",
                      questionType: "String",
                      questionTitle: "Cannot be assessed",
                    },
                  },
                ],
                _id: "604686d5bea2585f449083b6",
                questionType: "MultipleChoice",
                questionTitle: "Tumor Extension",
              },
            },
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f449083e2",
              id: 39990.1000043,
              orderNumber: 189,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083e4",
                    id: 2159.1000043,
                    orderNumber: 193,
                    selectionDeselectsSiblings: true,
                    questionBody: {
                      _id: "604686d5bea2585f449083e5",
                      questionType: "NoResponse",
                      questionTitle: "Not identified",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083e7",
                    id: 52962.1000043,
                    orderNumber: 194,
                    questionBody: {
                      _id: "604686d5bea2585f449083e8",
                      questionType: "NoResponse",
                      questionTitle:
                        "Large vessel invasion, renal vein (including when identified clinically)",
                      questionText: "Large vessel invasion, renal vein",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083ea",
                    id: 59454.1000043,
                    orderNumber: 196,
                    questionBody: {
                      _id: "604686d5bea2585f449083eb",
                      questionType: "NoResponse",
                      questionTitle:
                        "Large vessel invasion, vena cava (including when identified clinically)",
                      questionText: "Large vessel invasion, vena cava",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083ed",
                    id: 43597.1000043,
                    orderNumber: 198,
                    questionBody: {
                      _id: "604686d5bea2585f449083ee",
                      questionType: "NoResponse",
                      questionTitle:
                        "Large vessel invasion, not otherwise specified",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083f0",
                    id: 55828.1000043,
                    orderNumber: 199,
                    questionBody: {
                      _id: "604686d5bea2585f449083f1",
                      questionType: "NoResponse",
                      questionTitle: "Microscopic angioinvasion",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083f3",
                    id: 45031.1000043,
                    orderNumber: 200,
                    questionBody: {
                      _id: "604686d5bea2585f449083f4",
                      questionType: "NoResponse",
                      questionTitle: "Lymphatic invasion",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083f6",
                    id: 2161.1000043,
                    orderNumber: 201,
                    selectionDeselectsSiblings: true,
                    questionBody: {
                      _id: "604686d5bea2585f449083f7",
                      questionType: "String",
                      questionTitle: "Cannot be determined",
                    },
                  },
                ],
                _id: "604686d5bea2585f449083e3",
                questionType: "MultipleChoice",
                questionTitle: "Lymphovascular Invasion (Note F)",
                questionText: "Lymphovascular Invasion",
              },
            },
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f449083fa",
              id: 48491.1000043,
              orderNumber: 205,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083fc",
                    id: 20863.1000043,
                    orderNumber: 208,
                    questionBody: {
                      _id: "604686d5bea2585f449083fd",
                      questionType: "NoResponse",
                      questionTitle: "Hemorrhagic",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449083ff",
                    id: 20864.1000043,
                    orderNumber: 209,
                    questionBody: {
                      _id: "604686d5bea2585f44908400",
                      questionType: "NoResponse",
                      questionTitle: "Necrotic",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908402",
                    id: 20865.1000043,
                    orderNumber: 210,
                    questionBody: {
                      _id: "604686d5bea2585f44908403",
                      questionType: "String",
                      questionTitle: "Other (specify)",
                      questionText: "{no text}",
                    },
                  },
                ],
                _id: "604686d5bea2585f449083fb",
                questionType: "MultipleChoice",
                questionTitle: "Tumor Description",
              },
            },
          ],
          sections: [],
          _id: "604686d5bea2585f4490837e",
          id: 17876.1000043,
          title: "TUMOR",
        },
        {
          questions: [
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f44908408",
              id: 2153.1000043,
              orderNumber: 217,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490840a",
                    id: 2154.1000043,
                    orderNumber: 220,
                    questionBody: {
                      _id: "604686d5bea2585f4490840b",
                      questionType: "NoResponse",
                      questionTitle: "Uninvolved by tumor",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908419",
                    id: 2155.1000043,
                    orderNumber: 243,
                    questionBody: {
                      _id: "604686d5bea2585f4490841a",
                      questionType: "NoResponse",
                      questionTitle: "Involved by tumor",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490841f",
                    id: 2157.1000043,
                    orderNumber: 250,
                    questionBody: {
                      _id: "604686d5bea2585f44908420",
                      questionType: "String",
                      questionTitle: "Cannot be assessed",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908422",
                    id: 20852.1000043,
                    orderNumber: 254,
                    questionBody: {
                      _id: "604686d5bea2585f44908423",
                      questionType: "String",
                      questionTitle: "Not applicable",
                    },
                  },
                ],
                _id: "604686d5bea2585f44908409",
                questionType: "MultipleChoice",
                questionTitle: "Margins",
              },
            },
          ],
          sections: [],
          _id: "604686d5bea2585f44908407",
          id: 17878.1000043,
          title: "MARGINS",
        },
        {
          questions: [
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f44908428",
              id: 1867.1000043,
              orderNumber: 260,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490842a",
                    id: 1868.1000043,
                    orderNumber: 263,
                    selectionDisablesChildren: true,
                    questionBody: {
                      _id: "604686d5bea2585f4490842b",
                      questionType: "NoResponse",
                      questionTitle: "No lymph nodes submitted or found",
                    },
                  },
                ],
                _id: "604686d5bea2585f44908429",
                questionType: "MultipleChoice",
                questionTitle: "Regional Lymph Nodes",
              },
            },
          ],
          sections: [],
          _id: "604686d5bea2585f44908427",
          id: 17881.1000043,
          title: "LYMPH NODES",
        },
        {
          questions: [
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f44908454",
              id: 20880.1000043,
              orderNumber: 314,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908456",
                    id: 22897.1000043,
                    orderNumber: 318,
                    selectionDeselectsSiblings: true,
                    questionBody: {
                      _id: "604686d5bea2585f44908457",
                      questionType: "String",
                      questionTitle: "?Not applicable",
                      questionText: "Not applicable",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908459",
                    id: 20890.1000043,
                    orderNumber: 323,
                    questionBody: {
                      _id: "604686d5bea2585f4490845a",
                      questionType: "NoResponse",
                      questionTitle: "m (multiple primary tumors)",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490845c",
                    id: 20891.1000043,
                    orderNumber: 324,
                    questionBody: {
                      _id: "604686d5bea2585f4490845d",
                      questionType: "NoResponse",
                      questionTitle: "r (recurrent)",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490845f",
                    id: 20892.1000043,
                    orderNumber: 325,
                    questionBody: {
                      _id: "604686d5bea2585f44908460",
                      questionType: "NoResponse",
                      questionTitle: "y (post-treatment)",
                    },
                  },
                ],
                _id: "604686d5bea2585f44908455",
                questionType: "MultipleChoice",
                questionTitle: "?TNM Descriptors",
                questionText: "TNM Descriptors",
              },
            },
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f44908463",
              id: 2137.1000043,
              orderNumber: 326,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908465",
                    id: 2142.1000043,
                    orderNumber: 331,
                    questionBody: {
                      _id: "604686d5bea2585f44908466",
                      questionType: "NoResponse",
                      questionTitle: "pTX: Primary tumor cannot be assessed",
                      questionText: "pTX",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908468",
                    id: 20889.1000043,
                    orderNumber: 333,
                    questionBody: {
                      _id: "604686d5bea2585f44908469",
                      questionType: "NoResponse",
                      questionTitle: "pT0: No evidence of primary tumor",
                      questionText: "pT0",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490846b",
                    id: 2138.1000043,
                    orderNumber: 335,
                    questionBody: {
                      _id: "604686d5bea2585f4490846c",
                      questionType: "NoResponse",
                      questionTitle:
                        "pT1: Tumor <= 5 cm in greatest dimension, no extra-adrenal invasion",
                      questionText: "pT1",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490846e",
                    id: 2139.1000043,
                    orderNumber: 337,
                    questionBody: {
                      _id: "604686d5bea2585f4490846f",
                      questionType: "NoResponse",
                      questionTitle:
                        "pT2: Tumor > 5 cm, no extra-adrenal invasion",
                      questionText: "pT2",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908471",
                    id: 2140.1000043,
                    orderNumber: 339,
                    questionBody: {
                      _id: "604686d5bea2585f44908472",
                      questionType: "NoResponse",
                      questionTitle:
                        "pT3: Tumor of any size with local invasion, but not invading adjacent organs",
                      questionText: "pT3",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908474",
                    id: 2141.1000043,
                    orderNumber: 341,
                    questionBody: {
                      _id: "604686d5bea2585f44908475",
                      questionType: "NoResponse",
                      questionTitle:
                        "pT4: Tumor of any size with invasion of adjacent organs (kidney, diaphragm, pancreas, spleen, or liver) or large blood vessels (renal vein or vena cava)",
                      questionText: "pT4",
                    },
                  },
                ],
                _id: "604686d5bea2585f44908464",
                questionType: "MultipleChoice",
                questionTitle: "Primary Tumor (pT)",
              },
            },
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f44908478",
              id: 2143.1000043,
              orderNumber: 343,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490847a",
                    id: 2144.1000043,
                    orderNumber: 347,
                    questionBody: {
                      _id: "604686d5bea2585f4490847b",
                      questionType: "NoResponse",
                      questionTitle:
                        "pNX: Regional lymph nodes cannot be assessed",
                      questionText: "pNX",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490847d",
                    id: 2145.1000043,
                    orderNumber: 349,
                    questionBody: {
                      _id: "604686d5bea2585f4490847e",
                      questionType: "NoResponse",
                      questionTitle: "pN0: No regional lymph node metastasis",
                      questionText: "pN0",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908480",
                    id: 2146.1000043,
                    orderNumber: 351,
                    questionBody: {
                      _id: "604686d5bea2585f44908481",
                      questionType: "NoResponse",
                      questionTitle:
                        "pN1: Metastasis in regional lymph node(s)",
                      questionText: "pN1",
                    },
                  },
                ],
                _id: "604686d5bea2585f44908479",
                questionType: "MultipleChoice",
                questionTitle: "Regional Lymph Nodes (pN) (Note H)",
                questionText: "Regional Lymph Nodes (pN)",
              },
            },
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f44908484",
              id: 2149.1000043,
              orderNumber: 353,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908486",
                    id: 20895.1000043,
                    orderNumber: 357,
                    questionBody: {
                      _id: "604686d5bea2585f44908487",
                      questionType: "NoResponse",
                      questionTitle:
                        "?Not applicable - pM cannot be determined from the submitted specimen(s)",
                      questionText:
                        "Not applicable - pM cannot be determined from the submitted specimen(s)",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908489",
                    id: 2151.1000043,
                    orderNumber: 359,
                    questionBody: {
                      _id: "604686d5bea2585f4490848a",
                      questionType: "NoResponse",
                      questionTitle: "pM1: Distant metastasis",
                      questionText: "pM1",
                    },
                  },
                ],
                _id: "604686d5bea2585f44908485",
                questionType: "MultipleChoice",
                questionTitle: "?Distant Metastasis (pM) (Note I)",
                questionText: "Distant Metastasis (pM)",
              },
            },
          ],
          sections: [],
          _id: "604686d5bea2585f44908453",
          id: 2136.1000043,
          title:
            "PATHOLOGIC STAGE CLASSIFICATION  (pTNM, AJCC 8th Edition) (Note G)",
          sectionText:
            "PATHOLOGIC STAGE CLASSIFICATION  (pTNM, AJCC 8th Edition)",
        },
        {
          questions: [
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f44908492",
              id: 39188.1000043,
              orderNumber: 369,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908494",
                    id: 2163.1000043,
                    orderNumber: 372,
                    selectionDeselectsSiblings: true,
                    questionBody: {
                      _id: "604686d5bea2585f44908495",
                      questionType: "NoResponse",
                      questionTitle: "None identified",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f44908497",
                    id: 20897.1000043,
                    orderNumber: 373,
                    questionBody: {
                      _id: "604686d5bea2585f44908498",
                      questionType: "NoResponse",
                      questionTitle: "Hemorrhage",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490849a",
                    id: 20898.1000043,
                    orderNumber: 374,
                    questionBody: {
                      _id: "604686d5bea2585f4490849b",
                      questionType: "NoResponse",
                      questionTitle: "Cystic change",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f4490849d",
                    id: 20854.1000043,
                    orderNumber: 375,
                    questionBody: {
                      _id: "604686d5bea2585f4490849e",
                      questionType: "NoResponse",
                      questionTitle: "Calcifications",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449084a0",
                    id: 2167.1000043,
                    orderNumber: 376,
                    questionBody: {
                      _id: "604686d5bea2585f449084a1",
                      questionType: "String",
                      questionTitle: "Other (specify)",
                      questionText: "{no text}",
                    },
                  },
                ],
                _id: "604686d5bea2585f44908493",
                questionType: "MultipleChoice",
                questionTitle: "Additional Pathologic Findings",
              },
            },
          ],
          sections: [],
          _id: "604686d5bea2585f44908491",
          id: 17884.1000043,
          title: "ADDITIONAL FINDINGS",
        },
        {
          questions: [
            {
              questions: [],
              sections: [],
              _id: "604686d5bea2585f449084a6",
              id: 42054.1000043,
              orderNumber: 383,
              questionBody: {
                choices: [
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449084a8",
                    id: 54683.1000043,
                    orderNumber: 387,
                    questionBody: {
                      _id: "604686d5bea2585f449084a9",
                      questionType: "Int",
                      questionTitle: "Ki-67 labeling index (%) (specify)",
                      questionText: "Ki-67 labeling index",
                      unitSystem: "UCOM",
                      units: "%",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449084ab",
                    id: 54436.1000043,
                    orderNumber: 394,
                    questionBody: {
                      _id: "604686d5bea2585f449084ac",
                      questionType: "String",
                      questionTitle:
                        "Reticulin stain (specify type(s) and result(s))",
                      questionText: "Reticulin stain",
                    },
                  },
                  {
                    questions: [],
                    sections: [],
                    _id: "604686d5bea2585f449084ae",
                    id: 52023.1000043,
                    orderNumber: 399,
                    questionBody: {
                      _id: "604686d5bea2585f449084af",
                      questionType: "String",
                      questionTitle: "Other (specify type and result)",
                      questionText: "{no text}",
                    },
                  },
                ],
                _id: "604686d5bea2585f449084a7",
                questionType: "MultipleChoice",
                questionTitle: "Ancillary Studies (Note L)",
                questionText: "Ancillary Studies",
              },
            },
          ],
          sections: [],
          _id: "604686d5bea2585f449084a5",
          id: 17880.1000043,
          title: "SPECIAL STUDIES",
        },
      ],
      questions: [
        {
          questions: [],
          sections: [],
          _id: "604686d5bea2585f449084b3",
          id: 2168.1000043,
          orderNumber: 404,
          questionBody: {
            _id: "604686d5bea2585f449084b4",
            questionType: "String",
            questionTitle: "?Comment(s)",
            questionText: "Comment(s)",
          },
        },
      ],
      _id: "604686d5bea2585f4490832f",
      id: "Adrenal.Bx.Res.129_3.003.001.REL_sdcFDF",
      diagnosticProcedure: {
        responses: [],
        _id: "604686d5bea2585f4490832e",
        id: 100,
      },
      title: "ADRENAL GLAND",
    },
    procedures: [{ title: "Adrenal Gland" }],
    patients: [],
    patient: null,
    createPatientModalOpen: false,
  };
  componentDidMount() {
    // TODO: Get list of procedures

    // Get list of patients
    // Get the current user's conversations
    this.getPatients();
  }

  getPatients = () => {
    axios
      .get("http://localhost:3001/api/patients")
      .then((res) => {
        console.log(res.data);
        this.setState({
          patients: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleProcedureChange = (event, input) => {
    // TODO: Get form based on procedure
    // console.log("input: ", input);
    if (input == null) {
      this.setState({ form: null });
    } else {
      this.setState({ form: this.state.adrenalGlandForm });
    }
  };

  onPatientChange = (event, input) => {
    this.setState({
      patient: input,
    });
  };

  canSubmit = () => {
    return this.state.patient !== null;
  };

  handleSubmit = () => {
    console.log("form", this.state.form);
    console.log("patient", this.state.patient);
    axios
      .post("http://localhost:3001/api/responses/", {
        patient: this.state.patient,
        form: this.state.form,
        formTitle: this.state.form.title,
      })
      .then((res) => {
        console.log("form submitted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderForm = () => {
    if (this.state.form !== null) {
      return (
        <div>
          <Autocomplete
            className="autocomplete"
            required
            noOptionsText={
              <Button
                onMouseDown={() => this.handleCreatePatientModalOpen()}
                variant="contained"
              >
                Add New Patient
              </Button>
            }
            value={this.state.patient}
            onChange={this.onPatientChange}
            options={this.state.patients}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose patient"
                variant="outlined"
              />
            )}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.handleCreatePatientModalOpen()}
          >
            Add New Patient
          </Button>
          <h1>{this.state.form.title}</h1>
          {this.state.form.sections.map((section) => (
            <div key={section.id}>
              <div className="sectionTitleContainer">
                <div className="sectionTitle">{section.title}</div>
                <div className="sectionText">{section.sectionText}</div>
              </div>
              {section.questions.map((question) => (
                <div key={question.id} className="questionContainer">
                  <div className="questionTitle">
                    {question.questionBody.questionTitle}
                  </div>
                  <div className="questionText">
                    {question.questionBody.questionText}
                  </div>

                  {this.renderQuestionType(question.questionBody)}
                </div>
              ))}
            </div>
          ))}
          <div className="action-buttons">
            <Link to="/">
              <Button variant="contained" color="secondary">
                Cancel
              </Button>
            </Link>
            <Button
              onClick={() => this.handleSubmit()}
              variant="contained"
              color="primary"
              disabled={!this.canSubmit()}
            >
              Submit
            </Button>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  // TODO: Add other types of questions
  // Returns question based on question type
  renderQuestionType(questionBody) {
    if (questionBody.questionType == "TrueFalse") {
      return <TrueFalse />;
    } else if (questionBody.questionType == "MultipleChoice") {
      // Check to see if radio, otherwise it is checkbox
      return (
        <MultipleChoice
          isRadio={"is_radio" in questionBody ? questionBody.is_radio : false}
          choices={questionBody.choices}
          question={questionBody}
        />
      );
    } else if (questionBody.questionType == "String") {
      return <Text question={questionBody} />;
    } else if (questionBody.questionType == "Int") {
      return <Int question={questionBody} />;
    }
  }

  handleCreatePatientModalOpen = () => {
    this.setState({
      createPatientModalOpen: true,
    });
  };

  handleCreatePatientModalClose = () => {
    this.setState({
      createPatientModalOpen: false,
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <Autocomplete
            className="autocomplete"
            onChange={this.handleProcedureChange}
            options={this.state.procedures}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose procedure"
                variant="outlined"
              />
            )}
          />
          {this.renderForm()}
        </div>
        <Modal
          open={this.state.createPatientModalOpen}
          onClose={this.handleCreatePatientModalClose}
          className="create-patient-modal"
        >
          <CreatePatient
            closeModal={this.handleCreatePatientModalClose}
            reloadPatients={this.getPatients}
          />
        </Modal>
      </div>
    );
  }
}

export default FormSection;
