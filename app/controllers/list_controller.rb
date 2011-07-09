class ListController < ApplicationController
  respond_to :html

  def index
    @path = APP_CONFIG['base_dir']
    @path += params[:path] + '/' if params[:path]
    logger.debug(@path)
    @entries = Dir.entries(@path)
    respond_with @entries
  end

  def play
    @path = '/' + params[:path]
    send_file @path, :type=>"audio/mp3", :filename => @path
  end

end
