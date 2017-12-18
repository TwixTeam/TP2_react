import ChoiceListHelper from '../helpers/ChoiceListHelper';
 

it('add a Choice in the list', () => {
  const initialChoiceList = [
    {id:1, name:'JAVA', value:2, percent: 50.00},
    {id:2, name:'C#', value:2, percent: 50.00}
  ];

  const newChoiceList = ChoiceListHelper.addChoice(initialChoiceList, 'C++');

  const expectedChoiceList = [
    {id:1, name:'JAVA', value:2, percent: 50.00},
    {id:2, name:'C#', value:2, percent: 50.00},
    {id:3, name:'C++', value:0, percent: 0}
  ];

  expect(newChoiceList).toEqual(expectedChoiceList);

});

it('does not add a Choice if its name already exists in the Choice list', () => {
  const initialChoiceList = [
    {id:1, name:'JAVA', value:2, percent: 50.00},
    {id:2, name:'C#', value:2, percent: 50.00}
  ];

  const newChoiceList = ChoiceListHelper.addChoice(initialChoiceList, 'JAVA');

  const expectedChoiceList = [
    {id:1, name:'JAVA', value:2, percent: 50.00},
    {id:2, name:'C#', value:2, percent: 50.00},
  ];

  expect(newChoiceList).toEqual(expectedChoiceList);

});

it('does not change the initial list after adding a Choice', () => {
  const initialChoiceList = [
    {id:1, name:'JAVA', value:2, percent: 50.00},
    {id:2, name:'C#', value:2, percent: 50.00}
  ];

  const expectedChoiceList = [...initialChoiceList];

  ChoiceListHelper.addChoice(initialChoiceList, 'C++');

  expect(expectedChoiceList).toEqual(initialChoiceList);

});


it('updates a Choice value in the list', () => {
  const initialChoiceList = [
    {id:1, name:'JAVA', value:2, percent: 50.00},
    {id:2, name:'C#', value:2, percent: 50.00}
  ];

  const newChoiceList = ChoiceListHelper.editVote(initialChoiceList, 1, '8');

  const expectedChoiceList = [
    {id:1, name:'JAVA', value:8, percent: 80.00},
    {id:2, name:'C#', value:2, percent: 20.00},
  ];

  expect(newChoiceList).toEqual(expectedChoiceList);

});

it('forces Choice value to 0 if the input value is empty', () => {
  const initialChoiceList = [
    {id:1, name:'JAVA', value:2, percent: 50.00},
    {id:2, name:'C#', value:2, percent: 50.00}
  ];

  const newChoiceList = ChoiceListHelper.editVote(initialChoiceList, 1, '');

  const expectedChoiceList = [
    {id:1, name:'JAVA', value:0, percent: 0.00},
    {id:2, name:'C#', value:2, percent: 100.00},
  ];

  expect(newChoiceList).toEqual(expectedChoiceList);

});

it('forces Choice value to 0 if the input value is negative', () => {
  const initialChoiceList = [
    {id:1, name:'JAVA', value:2, percent: 50.00},
    {id:2, name:'C#', value:2, percent: 50.00}
  ];

  const newChoiceList = ChoiceListHelper.editVote(initialChoiceList, 1, '-5');

  const expectedChoiceList = [
    {id:1, name:'JAVA', value:0, percent: 0.00},
    {id:2, name:'C#', value:2, percent: 100.00},
  ];

  expect(newChoiceList).toEqual(expectedChoiceList);

});

it('does not change the initial list after updating a Choice value', () => {
  const initialChoiceList = [
    {id:1, name:'JAVA', value:2, percent: 50.00},
    {id:2, name:'C#', value:2, percent: 50.00}
  ];

  const expectedChoiceList = [...initialChoiceList];

  ChoiceListHelper.editVote(initialChoiceList, 1, 8);

  expect(expectedChoiceList).toEqual(initialChoiceList);
});


it('updates all Choices percentage in the list', () => {
  const initialChoiceList = [
    {id:1, name:'JAVA', value:2, percent: 0.00},
    {id:2, name:'C#', value:2, percent: 0.00}
  ];

  const newChoiceList = ChoiceListHelper.updatePercentage(initialChoiceList);

  const expectedChoiceList = [
    {id:1, name:'JAVA', value:2, percent: 50.00},
    {id:2, name:'C#', value:2, percent: 50.00},
  ];

  expect(newChoiceList).toEqual(expectedChoiceList);

});

it('does not change the initial list after updating all Choices percentage', () => {
  const initialChoiceList = [
    {id:1, name:'JAVA', value:2, percent: 0.00},
    {id:2, name:'C#', value:2, percent: 0.00}
  ];

  const expectedChoiceList = [...initialChoiceList];

  ChoiceListHelper.updatePercentage(initialChoiceList);

  expect(expectedChoiceList).toEqual(initialChoiceList);
});
