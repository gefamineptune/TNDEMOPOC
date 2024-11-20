function populateForNewData() {
    Input5.setValue("");

    Input4.setValue("");

    Input8.setValue("");

    Input6.setValue("");

    Input3.setValue("");

    Input2.setValue("");

    DatePicker.setValue("");

    CheckBox.setSelected(false);

    ImageProfilePicture.setSrc("");

    IdInvisible.setText("");

    ButtonUpdate.setVisible(false);
    ButtonSave.setVisible(true);
    Add.setVisible(true);
    Edit.setVisible(false);
    Input8.setType("Password");
    Unhide.setVisible(true);
    Hide.setVisible(false);

}


function populateUserDetailsPage(data) {

    Input5.setValue(data.Username);

    Input8.setValue(decrypt(data.Password));

    Input4.setValue(data.Email);

    Input6.setValue(data.Name);

    Input3.setValue(data.Address);

    Input2.setValue(data.PhoneNumber);

    DatePicker.setValue(formatDateForInput(data.DateOfBirth));

    CheckBox.setSelected(data.IsActive);

    ImageProfilePicture.setSrc(data.ProfilePicturePath);
    ImageBase64Invisible.setText(data.ProfilePicturePath);

    IdInvisible.setText(data.id);
    // console.log(populateUserDetailsPage);
    
    ButtonUpdate.setVisible(true)
    ButtonSave.setVisible(false)
    Edit.setVisible(true);
    Add.setVisible(false);
    Input8.setType("Password");
    Unhide.setVisible(true);
    Hide.setVisible(false);


}