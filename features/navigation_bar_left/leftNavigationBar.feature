@leftNavigationBar
Feature: Test set to check the left side menu items

    Background:
        Given user arrives on the Schul-Cloud homepage

    @teacherClicksLeftMenuItems
    Scenario Outline: As a user, I want to be able to click the left menu items
        When <userRole> logs in with email '<username>' and password '<password>'
        And '<userRole>' performs first login actions
        Then <userRole> clicks left navigation item 'logo'
        And <userRole> clicks left navigation item 'dashboard'
        And <userRole> clicks left navigation item 'courses'
        And <userRole> clicks left navigation item 'teams'
        And <userRole> clicks left navigation item 'homework'
        And <userRole> clicks left navigation item 'asked homework'
        And <userRole> clicks left navigation item 'private homework'
        And <userRole> clicks left navigation item 'archived homework'
        And <userRole> clicks left navigation item 'files'
        And <userRole> clicks left navigation item 'my files'
        And <userRole> clicks left navigation item 'course files'
        And <userRole> clicks left navigation item 'team files'
        And <userRole> clicks left navigation item 'shared files'
        And <userRole> clicks left navigation item 'news'
        And <userRole> clicks left navigation item 'calendar'
        And <userRole> clicks left navigation item 'addons'
        And <userRole> clicks left navigation item 'administration'
        And <userRole> clicks left navigation item 'admStudents'
        And <userRole> clicks left navigation item 'admTeachers'
        And <userRole> clicks left navigation item 'admClasses'
        And <userRole> clicks left navigation item 'helparea'
        And <userRole> clicks left navigation item 'helparticle'
        And <userRole> clicks left navigation item 'contact'
        # TODO nuxt pages - the navigation structure is different,
        #  therefor leave it for last page otherwise the other pages won't be found
        And <userRole> clicks left navigation item 'content'
        Examples:
            | userRole | username               | password     |
            | teacher  | lehrer@schul-cloud.org | Schulcloud1! |
            | admin    | admin@schul-cloud.org  | Schulcloud1! |


    @studentClicksLeftMenuItems
    Scenario Outline: As a user, I want to be able to click the left menu items
        When student logs in with email '<studentUsername>' and password '<password>'
        And student performs first login actions: data protection acceptance, password change '<password>'
        Then student clicks left navigation item 'logo'
        And student clicks left navigation item 'dashboard'
        And student clicks left navigation item 'courses'
        And student clicks left navigation item 'teams'
        And student clicks left navigation item 'homework'
        And student clicks left navigation item 'asked homework'
        And student clicks left navigation item 'private homework'
        And student clicks left navigation item 'archived homework'
        And student clicks left navigation item 'files'
        And student clicks left navigation item 'my files'
        And student clicks left navigation item 'course files'
        And student clicks left navigation item 'team files'
        And student clicks left navigation item 'shared files'
        And student clicks left navigation item 'news'
        And student clicks left navigation item 'calendar'
        And student clicks left navigation item 'addons'
        And student clicks left navigation item 'helparea'
        And student clicks left navigation item 'helparticle'
        And student clicks left navigation item 'contact'
        # TODO nuxt pages - the navigation structure is different,
        #  therefor leave it for last page otherwise the other pages won't be found
        And student clicks left navigation item 'content'
        Examples:
            | studentUsername             | password     |
            | paula.meyer@schul-cloud.org | Schulcloud1! |

    @visibilityOfManagmentSubMenuItems
    Scenario Outline: As a user, I want to be able to check submenu items for managment
        Given <userRole> logs in
        And <userRole> performs first login actions: data protection acceptance
        When <userRole> goes to managment
        Then <userRole> should see that all sub menu items are visible: '<tabsList>'
        Examples:
            | userRole | tabsList                                       |
            | admin    | SCHÜLER, LEHRER, KURSE, KLASSEN, TEAMS, SCHULE |
            | teacher  | SCHÜLER:INNEN, LEHRER:INNEN, KLASSEN           |
