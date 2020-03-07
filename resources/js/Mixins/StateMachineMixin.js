const stateMachine = {
    data() {
        return {
            stateMachines: {}
        };
    },
    methods: {
        machine(name, states, initialState = null) {
            this.stateMachines[name] = {states};
            this.stateMachines[name].state = initialState !== null ? initialState : states[0];
        },
        transitionMachineState(machineName, newState) {
            this.stateMachines[machineName].state = newState;
        },


    },

    computed: {
        isMachineInState() {
            return (machineName, state) => {
                console.log(this.stateMachines);
                return this.stateMachines[machineName].state === state;
            };
        }
    }
};

export default stateMachine;
