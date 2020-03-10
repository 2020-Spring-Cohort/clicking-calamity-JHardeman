describe('Clicking Calamity Tests:', () => {
    let underTest;
    beforeEach(() => {
        underTest = new ClickCount();
    })
    describe('ClickCounter can give the clickCount', () => {

        it('countClick() 1 time should result in a clickCount of 1.', () => {
            underTest.countClick();
            expect(underTest.clickCount).toBe(1);
        });
        it('countClick() 2 times should result in a clickCount of 2.', () => {
            underTest.countClick();
            underTest.countClick();
            expect(underTest.clickCount).toBe(2);
        });
    });

    describe('Clicking Companions:', () => {
        it("ClickCounter should have 0 when new.", () => {
            expect(underTest.getCompanionCount()).toBe(0);
        });


        it('Click Companion available when ClickCounter equals 100', () => {
            for (let i = 0; i < 100; i++) {
                underTest.countClick()
            }
            underTest.buyCompanion()
            expect(underTest.getCompanionCount()).toBe(1);
        });

        it('ClickCounter can have multiple Companions', () => {
            for (let i = 0; i < 220; i++) {
                underTest.countClick()
            }
            underTest.buyCompanion()
            underTest.buyCompanion()
            expect(underTest.getCompanionCount()).toBe(2);
        });

        it('Each Companion will increase its costs by 10% ', () => {
            for (let i = 0; i < 110; i++) {
                underTest.countClick();
            }
            underTest.buyCompanion()
            underTest.buyCompanion()
            expect(underTest.clickCount).toBe(10);
            expect(underTest.companionCost).toBe(100);

        });
    });

    describe('Clicking Compounder', () => {
        it('Compounder available when ClickCounter equals 10', () => {
            for (let i = 0; i < 10; i++) {
                underTest.countClick();
            }
            underTest.buyCompounder()
            expect(underTest.CompounderCount()).toBe(1);
        });

        it("ClickCompounder should have 0 when new.", () => {
            expect(underTest.CompounderCount()).toBe(0);
        });

        it('Each Compounder will increase its costs by 10%', () => {
            for (let i = 0; i <= 10; i++) {
                underTest.countClick();
            }
            underTest.buyCompounder();
            expect(underTest.CompounderCount()).toBe(1)
        })

        it('Compounder will increase the value of a click by 1.2', () => {
            for(let i = 0; i<10; i++) {
                underTest.countClick();
            }
            underTest.buyCompounder();
            expect(underTest.getClickValue()).toBe(1.2);
        })

        // it('Compounder increases click value by 1.2 exponentially based on Compounder Count', () => {
        //     for(let i = 0; i <20; i ++){
        //         underTest.countClick();
        //     }
        //     underTest.buyCompounder();
        //     underTest.CompounderCount();
        //     underTest.buyCompounder();
        //     underTest.CompounderCount();
        //     expect(underTest.getCompoundedClickValue).toBe(1.44);
        // })

        // it('Compounder Count will increase the number of Clicks made by a Companion',() => {
        //     for(let i = 0; i < 110; i++){
        //         underTest.ClickCount
        //     }
        //     underTest.buyCompanion();
        //     underTest.buyCompounder();
        //     expect(underTest.getClickValue()).toBe(1.2)
        // })


    }); 


});