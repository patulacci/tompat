class Film < ActiveRecord::Base

	attr_accessible :name, :critic
	
	validates :name, :presence => true

end
