describe('Clicking Calamity Tests:', () => {
    let underTest;
    beforeEach(() => {
        underTest = new ClickCount();
    })
    describe('countClick() records clicks and ClickCounter can give the clickCount', () => {
        
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

        it('Click Companion available when clickCount equals 100', () => {
            for(let i = 0; i<100; i++) {
                underTest.countClick()
            }
            underTest.buyCompanion()
            expect(underTest.getCompanionCount()).toBe(0);
        });


    });



});