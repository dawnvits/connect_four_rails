class BoardController < ApplicationController

  before_action :find_player1

  def add_pieces_to_column_one
    @rows = ColumnOneRow.all.order("id DESC")
	@rows.each do |row|
	  if !row.taken
	 	row_to_update = row
		row_to_update.update(:taken => true)
		  if @player_one.active?
		  	row_to_update.update(:player_one => true)
		  	@player_one.update(:active => false)
		  else
		  	row_to_update.update(:player_one => false)
		  	@player_one.update(:active => true)
		  end
		break
	  end
	end
	flash[:notice] = "Change Turn!"
	redirect_to root_url
  end

  def add_pieces_to_column_two
  	@rows = ColumnTwoRow.all.order("id DESC")
	@rows.each do |row|
	  if !row.taken
	 	row_to_update = row
		row_to_update.update(:taken => true)
		  if @player_one.active?
		  	row_to_update.update(:player_one => true)
		  	@player_one.update(:active => false)
		  else
		  	row_to_update.update(:player_one => false)
		  	@player_one.update(:active => true)
		  end
		break
	  end
	end
	flash[:notice] = "Change Turn!"
	redirect_to root_url
  end

  def add_pieces_to_column_three
  	@rows = ColumnThreeRow.all.order("id DESC")
	@rows.each do |row|
	  if !row.taken
	 	row_to_update = row
		row_to_update.update(:taken => true)
		  if @player_one.active?
		  	row_to_update.update(:player_one => true)
		  	@player_one.update(:active => false)
		  else
		  	row_to_update.update(:player_one => false)
		  	@player_one.update(:active => true)
		  end
		break
	  end
	end
	flash[:notice] = "Change Turn!"
	redirect_to root_url
  end

  def add_pieces_to_column_four
  	@rows = ColumnFourRow.all.order("id DESC")
	@rows.each do |row|
	  if !row.taken
	 	row_to_update = row
		row_to_update.update(:taken => true)
		  if @player_one.active?
		  	row_to_update.update(:player_one => true)
		  	@player_one.update(:active => false)
		  else
		  	row_to_update.update(:player_one => false)
		  	@player_one.update(:active => true)
		  end
		break
	  end
	end
	flash[:notice] = "Change Turn!"
	redirect_to root_url
  end

  def add_pieces_to_column_five
  	@rows = ColumnFiveRow.all.order("id DESC")
	@rows.each do |row|
	  if !row.taken
	 	row_to_update = row
		row_to_update.update(:taken => true)
		  if @player_one.active?
		  	row_to_update.update(:player_one => true)
		  	@player_one.update(:active => false)
		  else
		  	row_to_update.update(:player_one => false)
		  	@player_one.update(:active => true)
		  end
		break
	  end
	end
	flash[:notice] = "Change Turn!"
	redirect_to root_url
  end

  def add_pieces_to_column_six
  	@rows = ColumnSixRow.all.order("id DESC")
	@rows.each do |row|
	  if !row.taken
	 	row_to_update = row
		row_to_update.update(:taken => true)
		  if @player_one.active?
		  	row_to_update.update(:player_one => true)
		  	@player_one.update(:active => false)
		  else
		  	row_to_update.update(:player_one => false)
		  	@player_one.update(:active => true)
		  end
		break
	  end
	end
	flash[:notice] = "Change Turn!"
	redirect_to root_url
  end

  def add_pieces_to_column_seven
  	@rows = ColumnSevenRow.all.order("id DESC")
	@rows.each do |row|
	  if !row.taken
	 	row_to_update = row
		row_to_update.update(:taken => true)
		  if @player_one.active?
		  	row_to_update.update(:player_one => true)
		  	@player_one.update(:active => false)
		  else
		  	row_to_update.update(:player_one => false)
		  	@player_one.update(:active => true)
		  end
		break
	  end
	end
	flash[:notice] = "Change Turn!"
	redirect_to root_url
  end

  def reset
  	ColumnOneRow.where(taken: true).update_all(taken: false)
  	ColumnOneRow.where(player_one: true).update_all(player_one: false)
  	ColumnTwoRow.where(taken: true).update_all(taken: false)
  	ColumnTwoRow.where(player_one: true).update_all(player_one: false)
  	ColumnThreeRow.where(taken: true).update_all(taken: false)
  	ColumnThreeRow.where(player_one: true).update_all(player_one: false)
  	ColumnFourRow.where(taken: true).update_all(taken: false)
  	ColumnFourRow.where(player_one: true).update_all(player_one: false)
  	ColumnFiveRow.where(taken: true).update_all(taken: false)
  	ColumnFiveRow.where(player_one: true).update_all(player_one: false)
  	ColumnSixRow.where(taken: true).update_all(taken: false)
  	ColumnSixRow.where(player_one: true).update_all(player_one: false)
  	ColumnSevenRow.where(taken: true).update_all(taken: false)
  	ColumnSevenRow.where(player_one: true).update_all(player_one: false)
  	@player_one.update(:active => true)
  	flash[:notice] = "Game restarted!"
	redirect_to root_url
  end

  private

  def find_player1
  	@player_one = PlayerTracker.find(1)
  end

end
