class HomeController < ApplicationController

  def index
  	@column_one_rows = ColumnOneRow.all.order(:id)
  	@column_two_rows = ColumnTwoRow.all.order(:id)
  	@column_three_rows = ColumnThreeRow.all.order(:id)
  	@column_four_rows = ColumnFourRow.all.order(:id)
  	@column_five_rows = ColumnFiveRow.all.order(:id)
  	@column_six_rows = ColumnSixRow.all.order(:id)
  	@column_seven_rows = ColumnSevenRow.all.order(:id)
  	@player_one = PlayerTracker.find(1)
  end

end
