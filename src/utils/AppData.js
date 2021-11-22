import { TASK_LABEL } from "./Constants"

export const DEMO_DATA = [
    {
        id: 1637534220727,
        title: "To Do",
        tasks: [
            {
                id: 1637534255282,
                message: "Helpdesk Call AA999",
                label: TASK_LABEL.CP
            },
            {
                id: 1637534447594,
                message: "Helpdesk Call BB999",
                label: TASK_LABEL.CP
            },
        ]
    },
    {
        id: 1637534465698,
        title: "Development",
        tasks: [
            {
                id: 1637534497825,
                message: "Helpdesk Call CC999",
                label: TASK_LABEL.FAULT
            },
            {
                id: 1637534504662,
                message: "Helpdesk Call EE999",
                label: TASK_LABEL.CP
            },
        ]
    },
    {
        id: 1637534556082,
        title: "Testing",
        tasks: [
            {
                id: 1637534567497,
                message: "Helpdesk Call DD999",
                label: TASK_LABEL.FAULT
            }
        ]
    },
    {
        id: 1637534591758,
        title: "Done",
        tasks: [
            {
                id: 1637534603734,
                message: "Helpdesk Call GG999",
                label: TASK_LABEL.FAULT
            },
            {
                id: 1637534619954,
                message: "Helpdesk Call FF999",
                label: TASK_LABEL.CP
            }
        ]
    }
]
Object.freeze(DEMO_DATA)