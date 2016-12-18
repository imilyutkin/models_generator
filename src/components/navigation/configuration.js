import TestTable from '../table/testTable'
import Hello from '../hello';
import Settings from '../settings/settings'

export default [
    {
        name: "Home",
        path: "home",
        component: Hello
    },
    {
        name: "Terms",
        path: "terms",
        component: TestTable
    },
    {
        name: "Settings",
        path: "settings",
        component: Settings
    }
];