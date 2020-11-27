@management @managementSchool @ldap_config
Feature: Tests for the ldap config pages

    Background: User opens Schul-cloud homepage Website
		Given user arrives on the Schul-Cloud homepage

    @validateLdapInputs
    Scenario Outline: Validate the inputs of the ldap input fields
      Given <userRole> logs in with email '<username>' and password '<password>'
      When <userRole> goes to management
      And <userRole> goes to school tab
      #And <userRole> adds a ldap system
      #And <userRole> adds '<serverUrl>' to the serverUrl input
      #And <userRole> adds '<basePath>' to the basePath input
      #And <userRole> adds '<searchUser>' to the searchUser input
      #And <userRole> adds '<passwordSearchUser>' to the passwordSearchUser input
      #And <userRole> adds '<userPath>' to the userPath input
      #And <userRole> adds '<attributeFirstName>' to the attributeFirstName input
      #And <userRole> adds '<attributeFamilyName>' to the attributeFamilyName input
      #And <userRole> adds '<attributeEmail>' to the attributeEmail input
      #And <userRole> adds '<attributeUid>' to the attributeUid input
      #And <userRole> adds '<attributeUuid>' to the attributeUuid input
      #And <userRole> adds '<roleAttribute>' to the roleAttribute input
      #And <userRole> adds '<studentAttribute>' to the studentAttribute input
      #And <userRole> adds '<teacherAttribute>' to the teacherAttribute input
      #And <userRole> adds '<adminAttribute>' to the adminAttribute input
      #And <userRole> adds '<ignoreUser>' to the ignoreUser input
      #And <userRole> adds '<classPath>' to the classPath input
      #And <userRole> adds '<classesNameAttribute>' to the classesNameAttribute input
      #And <userRole> adds '<classesParticipantAttribute>' to the classesParticipantAttribute input
      #And <userRole> clicks verify button

       Examples:
        | userRole | username                     | password        | serverUrl                       | basePath             | searchUser           | passwordSearchUser | userPath          | attributeFirstName | attributeFamilyName | attributeEmail | attributeUid | attributeUuid | roleAttribute | studentAttribute       | teacherAttribute   | adminAttribute    | ignoreUser            | classPath  | classesNameAttribute | classesParticipantAttribute |
        | admin    | kai.admin.qa@schul-cloud.org | Schulcloud1qa!  | ldaps://ldap.schul-cloud.org    | cn=schueler,ou=rolle | cn=schueler,ou=rolle | pass/1234          | user=path;;user=p | givenName          | sn                  | mail@test.de   | uid          | uuid          | description   |  	cn=schueler,ou=rolle | cn=lehrer,ou=rolle | cn=admin,ou=rolle | cn=ehemalige,ou=rolle | class=path | description          | member                      |

# Test Data taken from https://ticketsystem.hpi-schul-cloud.org/browse/SC-7857