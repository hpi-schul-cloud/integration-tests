@versions

Feature: I want to be able to see the version of the deployed Schul-Cloud

@nuxtversion
Scenario:
  Given the user has opened /nuxtversion
  Then he should see a git sha

# Currently only the client works,
# because the other ones need a special build step that is not in the Dockerfiles yet

# @clientversion
# Scenario:
#   When a user arrives on the client version page
#   Then he should see a git sha

# @serverversion
# Scenario:
#   When a user arrives on the server version page
#   Then he should see a git sha