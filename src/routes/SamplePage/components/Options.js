export const One = ["Department Level", "Multiple Departments", "Agency Level", "Multiple Agencies"]
export const Two = []
export const Three = ["PY-1018 Review Paycheck", "ED-1003 HCM Audit", "EDWF- 1002 HCM Workflow ", "HR-1031 HR Non-State ", "HR-1018 Edison HR ", "ED-1015 HCM Data ", "CA-1004 CA Administrator"]
export const Five = ["GN-1008 Edison HCM Query ", "ED-1004 Query Tree", "ED-1001 Agency Tree", "PY-1019 Payroll Query Tree", "HR-1032 HR Query Tree", "GN-1003 Administrator"]
export const Six = ["HR-1034 HR ePAF Initiator", "HR-1035 HR ePAF Approver", "HR-1037 HR ePAF", "HR-1047 HR ePCR Initiator", "HR-1048 HR ePCR Approver", "HR-1049 HR ePCR Reviewer"]
export const Seven = ["TL-1008 Edison  Admin *", "TL-1009 TL Administrator *", "TL-1010 TL Configuration"]
export const Eight = ["PY-1015 Edison Administrator"]
export const Nine = ["PY-1014 PY BA Bypass", "PY-1016Payroll Bypass", "PY-1017 Legislature Bypass"]
export const Ten = []
export const Eleven = ["ED-1023 Edison Learner Admin", "ED-1035 ELM Administrator", "ED-1036 ELM Workflow ", "ED1033 Security for ELM", "ED-1029 ELM Audit"]
export const Twelve = ["ED-1028 Administrator", "ED-1024 Edison Manager", "ED-1025 Edison Query Viewer", "EL-3004 ELM Query Scheduler"]
export const Thirteen = []
export const Fifteen = ["Edison Batch", "Trace"]
export const Sixteen = ["ED-0009 Portal Query Admin", "ED-1002 EHD MSS Audit", "ED-0010 TN Mass Email", "PU-2081 eSup Portal Config", "ED-0001 TN ADS Designer"]
export const Seventeen = ["DBA Access", "Application Admin Access", "Production Control Access", "Security Access", "Developer Access", "SOA Access"]
export const Eighteen = ["ED-0033 Integration Manager", "Edison Security Administrator", "ED-0025 Portal Designer", "ED-0034 IntegrationContro", "Process Scheduler Administrator", "ED-1018 HCM Designer", "ED-1030 ELM  Designe"]
export const Nineteen = []
export const Twenty = ["CR-11006 Edison Administrator", "CR-11007 Edison Agent", "CR-11008 Desk KB Manager", "CR-11009 Edison Help Desk Manager"]
export const Twenty1 = ["CR-11018 Query Manager Access", "CR-11022 CRM Query Scheduler", "CR-11023 CRM Query Viewer", "CR-11024 Edison Query Tree CRM"]
export const Twenty2 = ["CR-11015 PT View App Designer", "CR-11016 CRM Workflow Administrator", "CR-11020 CRM PT Project", "CR-11021 CRM Trace"]
export const Twenty3 = ["Edison Application Administration", "Edison AP Trave", "Edison Assets", "Edison Black Belt", "Edison Benefits", "Edison BI Team", "Edison BI Financials", "Edison BI HCM/ELM", "Edison Development", "Edison Filenet", "Edison HCM Security", "Edison Logistics", "Edison Purchasing"]


export const data = [
  {
    "title":"HCM Data Access Levels",
    "key":"0-0",
    "option": One,
    "children":[
      {
        "title":"HCM Roles",
        "key":"0-0-0",
        "option": Two,
        "children":[
          {
            "title":"Edison HCM",
            "key":"0-0-0-0",
            "option": Three
          },
          {
            "title":"Edison HCM Query Access",
            "key":"0-0-0-1",
            "option": Five
          },
          {
            "title":"Edison Human Resources",
            "key":"0-0-0-2",
            "option": Six
          },
          {
            "title":"Edison Time & Labor *",
            "key":"0-0-0-3",
            "option": Seven
          },
          {
            "title":"Edison Payroll",
            "key":"0-0-0-4",
            "option": Eight
          },
          {
            "title":"Edison Payroll Lockout Exception Roles",
            "key":"0-0-0-5",
            "option": Nine
          }
        ]
      },
      {
        "title":"ELM Roles",
        "key":"0-0-1",
        "option": Ten,
        "children":[
          {
            "title":"Edison ELM",
            "key":"0-0-1-0",
            "option": Eleven
          },
          {
            "title":"Edison ELM Query Access",
            "key":"0-0-1-1",
            "option": Twelve
          }
        ]
      },
      {
        "title":"Miscellaneous Roles",
        "key":"0-0-2",
        "option": Thirteen,
        "children":[
          {
            "title":"All Domains",
            "key":"0-0-2-0",
            "option": Fifteen
          },
          {
            "title":"Edison Portal/HelpDesk/UserRights",
            "key":"0-0-2-1",
            "option": Sixteen
          },
          {
            "title":"Edison Infrastructure Group",
            "key":"0-0-2-2",
            "option": Seventeen
          },
          {
            "title":"Edison Technical Roles",
            "key":"0-0-2-3",
            "option": Eighteen
          }
        ]
      },
      {
        "title":"CRM Roles",
        "key":"0-0-3",
        "option": Nineteen,
        "children":[
          {
            "title":"CRM – Customer Relationship Management",
            "key":"0-0-3-0",
            "option": Twenty
          },
          {
            "title":"CRM – Query Access",
            "key":"0-0-3-1",
            "option": Twenty1
          },
          {
            "title":"CRM – Technical Roles",
            "key":"0-0-3-2",
            "option": Twenty2
          },
          {
            "title":"CRM Provider Groups",
            "key":"0-0-3-3",
            "option": Twenty3
          }
        ]
      }
    ]
  },
  {
    "title":"FSCM Data Access Levels",
    "key":"0-1",
    "option": [],
    "children":[
      {
        "title":"FSCM Roles",
        "key":"0-1-0",
        "option": [],
        "children":[
          {
            "title":"Accounts Payable",
            "key":"0-1-0-0",
            "option": []
          },
          {
            "title":"Accounts Receivable",
            "key":"0-1-0-1",
            "option": []
          },
          {
            "title":"Asset Management",
            "key":"0-1-0-2",
            "option": []
          },
          {
            "title":"Budget Control",
            "key":"0-1-0-3",
            "option": []
          },
          {
            "title":"Cash Management",
            "key":"0-1-0-4",
            "option": []
          },
          {
            "title":"Cashiering",
            "key":"0-1-0-5",
            "option": []
          },
          {
            "title":"Cost Allocation",
            "key":"0-1-0-6",
            "option": []
          },
          {
            "title":"Fleet",
            "key":"0-1-0-7",
            "option": []
          },
          {
            "title":"General Ledger",
            "key":"0-1-0-8",
            "option": []
          },
          {
            "title":"Grants",
            "key":"0-1-0-9",
            "option": []
          },
          {
            "title":"GT3",
            "key":"0-1-0-10",
            "option": []
          },
          {
            "title":"Inventory",
            "key":"0-1-0-11",
            "option": []
          },
          {
            "title":"Plant",
            "key":"0-1-0-12",
            "option": []
          },
          {
            "title":"Procurement",
            "key":"0-1-0-13",
            "option": []
          },
          {
            "title":"Projects",
            "key":"0-1-0-14",
            "option": []
          },
          {
            "title":"Travel",
            "key":"0-1-0-15",
            "option": []
          },
          {
            "title":"Workflow",
            "key":"0-1-0-16",
            "option": []
          },
          {
            "title":"TN Billing Services",
            "key":"0-1-0-17",
            "option": []
          },
          {
            "title":"Edison FSCM Query Access",
            "key":"0-1-0-18",
            "option": []
          },
          {
            "title":"Miscellaneous",
            "key":"0-1-0-19",
            "option": []
          }
        ]
      }
    ]
  },
  {
    "title":"Benefits Administration Access Roles",
    "key":"0-2",
    "option": [],
    "children":[
      {
        "title":"Edison Benefits Roles",
        "key":"0-2-0",
        "option": []
      },
      {
        "title":"Edison Business Intelligence",
        "key":"0-2-1",
        "option": []
      },
      {
        "title":"Edison OIAM",
        "key":"0-2-2",
        "option": []
      },
      {
        "title":"Additional Information",
        "key":"0-2-3",
        "option": []
      }
    ]
  },
  {
    "title":"Quest Stat",
    "key":"0-3",
    "option": [],
    "children":[
      {
        "title":"Restricted Stat Roles",
        "key":"0-3-0",
        "option": []
      }
    ]
  }
]

