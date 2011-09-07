require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get Main" do
    get :main
    assert_response :success
  end

end
